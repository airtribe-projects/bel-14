import { Vehicle } from "../Vehicle";

interface ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number; 
}


class SmallFixedParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 10;
    }    
}

class MediumFixedParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 20;
    }    
}

class LargeFixedParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 30;
    }    
}

class SmallDynamicParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 10 + (Date.now() - ticket.entryTime)/1000/60/60;
    }    
}

class MediumDynamicParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 20 + (Date.now() - ticket.entryTime)/1000/60/60;
    }    
}

class LargeDynamicParkingFeeStrategy implements ParkingFeeStrategy {
    calculateFee(ticket: ParkingTicket): number {
        return 30 + (Date.now() - ticket.entryTime)/1000/60/60;;
    }    
}





class ParkingTicket {
    ticketId: string;
    
    constructor(ticketId: string, vehicle: Vehicle, feeStrategy: ParkingFeeStrategy) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.amount = 0; 
        this.entryTime = Date.now()
        this.feeStrategy = feeStrategy
    }
    // All if else are gone
    calculateAmount() {
        return this.feeStrategy.calculateFee(this); 
    }
}



const vehicle =  new vehicle("ABC", "Medium");
const smallFeeStrategy = new SmallParkingFeeStrategy();

const ticket = new ParkingTicket("123", vehicle, smallFeeStrategy);

ticket.calculateAmount();
