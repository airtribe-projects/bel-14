// Vehicle.ts
import { ID } from "./types";
import { VehicleType } from "./VehicleType.ts";

export class Vehicle {
  constructor(private readonly vehicleId: ID, private readonly vehicleType: VehicleType) {}

  getVehicleId(): ID {
    return this.vehicleId;
  }

  getVehicleType(): VehicleType {
    return this.vehicleType;
  }
}
