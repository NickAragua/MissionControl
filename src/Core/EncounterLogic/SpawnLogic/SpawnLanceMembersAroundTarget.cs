using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;
using BattleTech.Designed;

using MissionControl.Rules;
using MissionControl.Utils;

namespace MissionControl.Logic {
  public class SpawnLanceMembersAroundTarget : SpawnLanceLogic {
    private string lanceKey = "";
    private string orientationTargetKey = "";
    private string lookTargetKey = "";

    private GameObject lance;
    private GameObject orientationTarget;
    private GameObject lookTarget;
    private LookDirection lookDirection;
    private float minDistanceFromTarget = 50f;
    private float maxDistanceFromTarget = 100f;
    private float minDistanceToSpawnFromInvalidSpawn = 10f;
    private List<Vector3> invalidSpawnLocations = new List<Vector3>();

    private int AttemptCountMax { get; set; } = 10;
    private int AttemptCount { get; set; } = 0;

    public SpawnLanceMembersAroundTarget(EncounterRules encounterRules, string lanceKey, string orientationTargetKey, LookDirection lookDirection) :
      this(encounterRules, lanceKey, orientationTargetKey, lookDirection, 10, 10) { } // TODO: Replace the hard coded values with a setting.json setting

    public SpawnLanceMembersAroundTarget(EncounterRules encounterRules, string lanceKey, string orientationTargetKey, LookDirection lookDirection, float minDistance, float maxDistance) :
      this(encounterRules, lanceKey, orientationTargetKey, orientationTargetKey, lookDirection, minDistance, maxDistance) { }

    public SpawnLanceMembersAroundTarget(EncounterRules encounterRules, string lanceKey, string orientationTargetKey, string lookTargetKey, LookDirection lookDirection, float minDistance, float maxDistance) : base(encounterRules) {
      this.lanceKey = lanceKey;
      this.orientationTargetKey = orientationTargetKey;
      this.lookTargetKey = lookTargetKey;
      this.lookDirection = lookDirection;
      minDistanceFromTarget = minDistance;
      maxDistanceFromTarget = maxDistance;
    }

    public override void Run(RunPayload payload) {
      GetObjectReferences();
      Main.Logger.Log($"[SpawnLanceMembersAroundTarget] For {lance.name}");
      lance.transform.position = orientationTarget.transform.position;
  
      List<GameObject> spawnPoints = lance.FindAllContains("SpawnPoint");
      foreach (GameObject spawnPoint in spawnPoints) {
        SpawnLanceMember(spawnPoint, orientationTarget, lookTarget, lookDirection);
      }

      invalidSpawnLocations.Clear();
    }

    protected override void GetObjectReferences() {
      this.EncounterRules.ObjectLookup.TryGetValue(lanceKey, out lance);
      this.EncounterRules.ObjectLookup.TryGetValue(orientationTargetKey, out orientationTarget);
      this.EncounterRules.ObjectLookup.TryGetValue(lookTargetKey, out lookTarget);

      if (lance == null || orientationTarget == null || lookTarget == null) {
        Main.Logger.LogError("[SpawnLanceMembersAroundTarget] Object references are null");
      }
    }

    public void SpawnLanceMember(GameObject spawnPoint, GameObject orientationTarget, GameObject lookTarget, LookDirection lookDirection) {
      CombatGameState combatState = UnityGameInstance.BattleTechGame.Combat;
      MissionControl encounterManager = MissionControl.Instance;
      Vector3 newSpawnPosition = GetRandomPositionFromTarget(orientationTarget, minDistanceFromTarget, maxDistanceFromTarget);

      if (encounterManager.EncounterLayerData.IsInEncounterBounds(newSpawnPosition)) {
        if (!IsWithinDistanceOfInvalidPosition(newSpawnPosition)) {
          spawnPoint.transform.position = newSpawnPosition;

          if (lookDirection == LookDirection.TOWARDS_TARGET) {
            RotateToTarget(spawnPoint, lookTarget);
          } else {
            RotateAwayFromTarget(spawnPoint, lookTarget);
          }

          if (!IsSpawnValid(spawnPoint, orientationTarget)) {
            CheckAttempts();
            SpawnLanceMember(spawnPoint, orientationTarget, lookTarget, lookDirection);
          } else {
            invalidSpawnLocations.Add(newSpawnPosition);
            Main.Logger.Log("[SpawnLanceMembersAroundTarget] Lance member spawn complete");
          }
        } else {
          Main.Logger.LogWarning("[SpawnLanceMembersAroundTarget] Cannot spawn a lance member on an invalid spawn. Finding new spawn point.");
          CheckAttempts();
          SpawnLanceMember(spawnPoint, orientationTarget, lookTarget, lookDirection);
        }
      } else {
        Main.Logger.LogWarning("[SpawnLanceMembersAroundTarget] Selected lance spawn point is outside of the boundary. Select a new lance spawn point.");
        CheckAttempts();
        SpawnLanceMember(spawnPoint, orientationTarget, lookTarget, lookDirection);  
      }
    }

    private bool IsWithinDistanceOfInvalidPosition(Vector3 newSpawn) {
      foreach (Vector3 invalidSpawn in invalidSpawnLocations) {
        Vector3 vectorToInvalidSpawn = newSpawn - invalidSpawn;
        vectorToInvalidSpawn.y = 0;
        float distanceToInvalidSpawn = vectorToInvalidSpawn.magnitude;
        if (distanceToInvalidSpawn < minDistanceToSpawnFromInvalidSpawn) return true;
      }
      return false;
    }

    private void CheckAttempts() {
      AttemptCount++;

      if (AttemptCount > AttemptCountMax) {
        AttemptCount = 0;
        Main.Logger.Log($"[SpawnLanceMembersAroundTarget] Cannot find a suitable lance member spawn within the boundaries of {minDistanceFromTarget} and {maxDistanceFromTarget}. Widening search");
        minDistanceFromTarget -= 10;
        if (minDistanceFromTarget <= 10) minDistanceFromTarget = 10;
        maxDistanceFromTarget += 25;     
      }
    }
  }
}