// ParkingFloor.ts
import { ParkingSpot } from "./ParkingSpot";
import { ParkingSpotType } from "./ParkingSpotType";
import { ID } from "./types";

export class ParkingFloor {
  private spots: ParkingSpot[] = [];
  private readonly floorId: ID;
  private isUnderMaintainence: boolean = false;

  constructor(floorId: ID) {
    this.floorId = floorId;
  }

  addSpot(spot: ParkingSpot): void {
    this.spots.push(spot);
  }

  getAvailableSpotForVehicle(spotType: ParkingSpotType): ParkingSpot | null {
    for (const spot of this.spots) {
        if (spot.getSpotType() === spotType && !(spot.isOccupied() || spot.getMaintenenceStatus())) {
          return spot;
        }
      }
      return null;
  }

  unparkVehicle(parkingSpot: ParkingSpot): boolean {
    if (!parkingSpot.isOccupied()) {
      console.log(`Parking spot ${parkingSpot.getSpotId()} is already empty.`);
      return false;
    }

    return parkingSpot.removeVehicle();
  }

    putUnderMaintainence(): boolean {
      return this.isUnderMaintainence = true;
    }

    removeFromMaintainence(): boolean {
      return this.isUnderMaintainence = false;
    }

    getMaintenenceStatus(): boolean {
      return this.isUnderMaintainence;
    }


  isFull(): boolean {
    return this.spots.length > 0 && this.spots.every((s) => s.isOccupied());
  }

  getFloorId(): ID {
    return this.floorId;
  }

  getAllSpots(): ParkingSpot[] {
    return this.spots.slice();
  }
}
