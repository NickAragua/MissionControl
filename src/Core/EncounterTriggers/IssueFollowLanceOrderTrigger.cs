using UnityEngine;

using System.Collections.Generic;

using BattleTech;
using BattleTech.Framework;

using HBS.Collections;

using MissionControl.AI;
using MissionControl.Result;
using MissionControl.Logic;

namespace MissionControl.Trigger {
  public class IssueFollowLanceOrderTrigger : EncounterTrigger {
    public override void Run(RunPayload payload) {
      Main.Logger.Log("[IssueFollowLanceOrderTrigger] Running trigger");
      EncounterLayerData encounterData = MissionControl.Instance.EncounterLayerData;
      SmartTriggerResponse onEncounterLoadIssueOrder = new SmartTriggerResponse();
      onEncounterLoadIssueOrder.inputMessage = MessageCenterMessageType.OnEncounterBegin;
      onEncounterLoadIssueOrder.designName = "Issue Follow Lance AI order on Encounter Start";

      DesignConditionalBox conditonalBox = new DesignConditionalBox();
      conditonalBox.CargoVTwo = new AlwaysTrueConditional();
      onEncounterLoadIssueOrder.conditionalbox = conditonalBox;

      FollowLanceOrder followOrder = new FollowLanceOrder();
      followOrder.EncounterTags.Add("Player 1");
      
      IssueCustomAIOrderResult issueOrder = ScriptableObject.CreateInstance<IssueCustomAIOrderResult>();
      issueOrder.issueAIOrderTo = IssueAIOrderTo.ToTeam;
      issueOrder.requiredReceiverTags.Add("Employer");
      issueOrder.aiOrder = followOrder;

      onEncounterLoadIssueOrder.resultList.contentsBox.Add(new EncounterResultBox(issueOrder));
      encounterData.responseGroup.triggerList.Add(onEncounterLoadIssueOrder);
    }
  }
}