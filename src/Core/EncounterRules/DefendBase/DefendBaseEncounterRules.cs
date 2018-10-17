using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;

using MissionControl.Logic;

namespace MissionControl.Rules {
  public class DefendBaseEncounterRules : EncounterRules {
    private GameObject PlotBase { get; set; }

    public DefendBaseEncounterRules() : base() { }

    public override void Build() {
      Main.Logger.Log("[DefendBaseEncounterRules] Setting up rule object references");
      BuildSpawns();
    }

    public void BuildSpawns() {
      Main.Logger.Log("[DefendBaseEncounterRules] Building spawns rules");
      EncounterLogic.Add(new SpawnLanceMembersAroundTarget(this, "SpawnerPlayerLance", "PlotBase", "SpawnerLanceEnemyWave1", "PlotBase", SpawnLogic.LookDirection.AWAY_FROM_TARGET, 50f, 300f));
      EncounterLogic.Add(new SpawnLanceAroundTarget(this, "SpawnerLanceEnemyWave1", "PlotBase", "SpawnerLanceEnemyWave3", SpawnLogic.LookDirection.TOWARDS_TARGET, 400f, 600f));
      /*
      EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerLanceEnemyWave2", "PlotBase"));
      EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerLanceEnemyWave3", "PlotBase"));
      EncounterLogic.Add(new SpawnLanceMembersAroundTarget(this, "SpawnerLanceEnemyWave1", "SpawnerLanceEnemyWave1", "PlotBase", SpawnLogic.LookDirection.TOWARDS_TARGET, 100f, 200f));
      EncounterLogic.Add(new SpawnLanceMembersAroundTarget(this, "SpawnerLanceEnemyWave2", "SpawnerLanceEnemyWave2", "PlotBase", SpawnLogic.LookDirection.TOWARDS_TARGET, 100f, 200f));
      EncounterLogic.Add(new SpawnLanceMembersAroundTarget(this, "SpawnerLanceEnemyWave3", "SpawnerLanceEnemyWave3", "PlotBase", SpawnLogic.LookDirection.TOWARDS_TARGET, 100f, 200f));
      */
    }

    public override void LinkObjectReferences(string mapName) {
      // ObjectLookup.Add("PlotBase", GameObject.Find("envPrfComp_mediumMilitaryBldgC_generic_static_destruct_whole (1)"));
      ObjectLookup.Add("PlotBase", GameObject.Find(GetPlotBaseName(mapName)));
      ObjectLookup.Add("SpawnerLanceEnemyWave1", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_Wave1Attackers"));
      ObjectLookup.Add("SpawnerLanceEnemyWave2", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_Wave2Attackers"));
      ObjectLookup.Add("SpawnerLanceEnemyWave3", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_Wave3Attackers"));
    }
  }
}