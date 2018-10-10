using System.Linq;
using System.Reflection;
using System.Collections;
using System.Collections.Generic;

using Harmony;

using MissionControl.Data;
using MissionControl.Utils;

namespace MissionControl {
  public class AiManager {
    private static AiManager instance;
    public static AiManager Instance {
      get {
        if (instance == null) instance = new AiManager();
        return instance;
      }
    }

    private Dictionary<BehaviorTreeIDEnum, List<CustomBehaviourTreeBranch>> injectionBranchRoots = new Dictionary<BehaviorTreeIDEnum, List<CustomBehaviourTreeBranch>>();

    private AiManager() {
      // Test
      CustomBehaviourTreeBranch customBehaviourBranch = new TestBranchNode(BehaviorTreeIDEnum.CoreAITree, "comply_with_stay_inside_region_order", BEHAVIOUR_INJECTION_ORDER.AFTER_SIBLING);
      AddCustomBehaviourBranch(customBehaviourBranch.BehaviourTreeType, customBehaviourBranch.Path, customBehaviourBranch);
    }

    public void LoadCustomBehaviourSequences(BehaviorTree behaviourTree, BehaviorTreeIDEnum behaviourTreeType) {
      List<CustomBehaviourTreeBranch> customBehaviourBranches = injectionBranchRoots[behaviourTreeType];
      foreach (CustomBehaviourTreeBranch customBehaviourBranch in customBehaviourBranches) {
        NodeSearchResult nodeSearchResults = FindNode(behaviourTree, customBehaviourBranch);
        if (nodeSearchResults != null) {
          customBehaviourBranch.Inject(behaviourTree, nodeSearchResults.NodeSiblings, nodeSearchResults.NodeIndex, nodeSearchResults.Node);
        }
      }
    }

    private NodeSearchResult FindNode(BehaviorTree behaviourTree, CustomBehaviourTreeBranch customBranch) {
      BehaviorNode rootNode = behaviourTree.RootNode;
      string[] pathNodeNames = customBranch.PathNodeNames;

      if (customBranch.BehaviourTreeType == BehaviorTreeIDEnum.CoreAITree) {
        BehaviorNode parent = rootNode;
        NodeSearchResult nodeSearchResults = null;
        for (int i = 0; i < pathNodeNames.Length; i++) {
          nodeSearchResults = FindNode(parent, pathNodeNames[i]);
          if (nodeSearchResults != null) {
            parent = nodeSearchResults.Node;
          }
        }

        if (nodeSearchResults != null) {
          string name = (string)AccessTools.Field(typeof(BehaviorNode), "name").GetValue(nodeSearchResults.Node);
          Main.Logger.Log($"[FindNode] Found target from path '{customBranch.Path}'. Target found was '{name}'");
          return nodeSearchResults;
        }
      }

      return null;
    }

    private NodeSearchResult FindNode(BehaviorNode parent, string nodeName) {
      if (parent is CompositeBehaviorNode) {
        CompositeBehaviorNode compositeParent = (CompositeBehaviorNode)parent;
        int index = compositeParent.Children.FindIndex(child => {
          string childName = (string)AccessTools.Field(typeof(BehaviorNode), "name").GetValue(child);
          if (childName == nodeName) return true;
          return false;
        });

        if (index != -1) return new NodeSearchResult(compositeParent.Children, index, compositeParent.Children[index]);
        return null;
      }

      string name = (string)AccessTools.Field(typeof(BehaviorNode), "name").GetValue(parent);
      Main.Logger.LogError($"[FindNode] BehaviourNode parent '{name}' is not a composite node. Paths for custom behaviour branches can only contain composite nodes.");
      return null;
    }

    public void AddCustomBehaviourBranch(BehaviorTreeIDEnum behaviourTreeType, string path, CustomBehaviourTreeBranch customBranch) {
      if (!injectionBranchRoots.ContainsKey(behaviourTreeType)) injectionBranchRoots.Add(behaviourTreeType, new List<CustomBehaviourTreeBranch>());
      injectionBranchRoots[behaviourTreeType].Add(customBranch);
    }
  }
}