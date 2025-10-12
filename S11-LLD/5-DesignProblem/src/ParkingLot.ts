// ParkingLot.ts
import { ID } from "./types";
import { ParkingFloor } from "./ParkingFloor";
import { EntryPanel } from "./EntryPanel";
import { ExitPanel } from "./ExitPanel";
import { Vehicle } from "./Vehicle";
import { ParkingTicket } from "./ParkingTicket";

export class ParkingLot {
  private parkingFloors: ParkingFloor[] = [];

  constructor(
    private readonly parkingLotId: ID,
    private readonly parkingLotName: string,
    private readonly address: string,
    private readonly totalFloors: number,
    private readonly entryPanel: EntryPanel,
    private readonly exitPanel: ExitPanel
  ) {}

  isFull(): boolean {
    return this.parkingFloors.every(floor => floor.isFull());
  }

  addParkingFloor(parkingFloor: ParkingFloor): void {
    this.parkingFloors.push(parkingFloor);
  }

  parkVehicle(vehicle: Vehicle): ParkingTicket {
    const spot = this.entryPanel.getSpotToParkOn(this.parkingFloors, vehicle.getVehicleType());
    const ticket = this.entryPanel.generateParkingTicket(vehicle, spot);
    console.log( `Vehicle ${vehicle.getVehicleId()} is parked with ticketId ${ticket.getTicketId()}`);
    return ticket;
  }

  exitVehicle(ticket: ParkingTicket): void {
    const updatedTicket = this.exitPanel.checkout(ticket);
    console.log(
      `Vehicle exited with ticketId ${updatedTicket.getTicketId()} amount ${updatedTicket.getAmount()}`
    );
  }
}
