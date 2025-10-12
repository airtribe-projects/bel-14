
class ParkingTicket {
    constructor(){
        // Handle all the cases for diffrent attribute
    }

    constructor(ticketId) {
        // Handle all remaining attributes
    }

    
    constructor(parkingTicketParam: ParkingTicketParameters) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.amount = amount;
        this.paid = paid;
    }


}

interface ParkingTicketParameters {
    ticketId: string | null, 


}


// One time to temporarily hold the parameters of the constructore
class ParkingTicketBuilder {

    setVechicle(vehicle) {
        this.vehicle = vehicle;
        return this;
    }

    setSpot(spot) {
        this.spot = spot;
        return this;
    }

    setEntryTime(entryTime) {
        this.entryTime = entryTime;
        return this;
    }

    setExitTime(exitTime) {
        this.exitTime = exitTime;
        return this;
    }

    setAmout(amount) {
        this.amount = amount;
        return this;
    }

    setPaidStatus(paid) {
        this.paid = paid;
        return this;
    }

    build() {
        return new ParkingTicket(this);
    }
}


// Scenario 1

const ticket = new ParkingTicket("ABC", "XYZ", "PQR")
const ticket = new ParkingTicket("ABC", "XYZ")
const ticket = new ParkingTicket()


const ticket = new ParkingTicketBuilder()
  .setEntryTime(new Date())
  .setExitTime(new Date(+4))
  .setAmount(100)
  .setPaid(true)
  .build();

// Scenario 2
const ticket = new ParkingTicketBuilder()
  .setEntryTime(new Date())
  .setAmount(100)
  .setPaid(true)
  .build();

