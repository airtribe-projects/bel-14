### Problem Statement
- Design a Parking Lot

### Steps to dsign a LLD
#### Stage 1: Requirement Gathering
- Fully Automated: Yes
- Ticket Counter: Yes, at entry gate
- Do we support diferent types of vehicles? Yes, 
    - 4W: Cars, buses
    - 2W: Bikes, bicycle
- Total Capacity? 100
- How many Entry and exit Points located? One
    - One entry and one exit points?
- Suport for multiple floors? Yes
- Any algorithm to pick up parkingspot? No Fancy algorithm
- How the parking fees be calculated?
    - Size
    - VehicleType
    - Weight of the vehicle
    - Duration
    - Monthly Pass
- Support for different payment types? Yes
- Support for different ticket types? Printed Ticket
- Should we support user management? No
- Non Functional requirements
- Should show availability of Spots in Parking Lot
- Support for Emergency? No

-- Scalable
-- modular
-- Low Coupling

#### Stage 2: Identifying the entities of the system
- Vehicle
- ParkingSpot
- ParkingSpotType
- EntryPanel
- ExitPanel
- Floor
- Payment
- Ticket
- TicketType
- ParkingLot
- VehicleType
- DisplayPanel

#### Identifying the relationship between entities
Vehicle

ParkingSpot
- HAS-A (Weak) relationship with Vehicle

ParkingFloor
- HAS-A (Strong) relationship with ParkingSpot 

EntryPanel
- USES-A relationship with Vehicle
- USES-A parkingFloor for availability
// 
- USES-A Ticket

ExitPanel
- Uses-A Vehicle
- Uses-A Ticket
- Uses-A ParkingFloor
- Has-A (Strong) PaymentProcessor

ParkingTicket
- Has-A (weak) Vehicle 
- Has-A (weak) ParkingSpot: Simple approach, assign the spot during the entry only ==> Simplifies my spot availability
- Has-A (weak) ParkingFloor

PaymentProcessor


ParkingLot
- Has-A (Strong) ParkingFloor 
- Has-A (Strong) DisplayPanel
- Uses-A ParkingTicket
- Uses-A Vehicle
- Has-A (Strong) EntryPanel
- Has-A (Strong) ExitPanel




#### Attributes and methods 
Vechicle:
+ id:
+ type
--- 


ParkingSpot
- id: 
- size: ENUM[small, medium, large]
- isOccupied: Boolean
- isUnderMaintainence: Boolean
- parkedVechicle: 
-----------
parkVehicle(vehicle): Boolean
unparkVehicle()
underMaintenanace()
isActive()


ParkingFloor
- id
- parkingSpots: List<ParkingSpot>
- isUnderMaintainence: Boolean
------------
+ getAvaialableParkingSpot(ParkingSpotType): ParkingSpot | null
+ underMaintenanace()
+ isActive()
+ unparkVehicle(ParkingSpot)

    parkingSpot.unparkVehicle()


EntryPanel:
- id
--------------
- computeFloorToBeparkedOn(parkingFloors): ParkingFloor
+ getSpotToParkOn(parkingFloors, parkingSpotType): ParkingSpot
+ generateTicket(vehicle, parkingFloor, parkingSpot): ParkingTicket
- generateSpotTypeBasedOnVehicleType(Vechicle): ParkingSpotType

ExitPanel: 
- id:
- paymentProcessor: 
----------------------
+ calculateAmount(ParkingTicket): int
    parkingTicket.calculateAmountToBePaid();
+ checkout(amount, paymentType, ticket): Ticket
    paymentProcessor.deductAmount(paymentType, amount);
    ticket.signTicket();
    <!-- ticket.parkingFloor.unparkVehicle(ParkingSpot) -->
    ticket.parkingSpot.unparkVehicle()

ParkingTicket:
- entryTime
- exitTime
- ticketId
- amount
- paid
- parkingFloor
- parkingSpot
- vehicle
- paymentPlan
-----------------
calculateAmountToBePaid()
signTicket()
ticket.paid= true
    ticket.amount = amount
    



Payment
- type:  


ParkingLot: 
- 

+ parkVehicle(vehicle): Ticket
+ exitVehicle(ticket): Ticket


// How do we refresh display panel?
// Approach 1: Responsibility of Parking Lot to get the empty spot from parking floors and display it
//    - Compute intensive
// Approach 2: At the ParkingLot level keep track of all the types of spot in a hashmap
//    - Compute efficient 
//    - Hashmap
//            Small: 5
//            Medium: 10
//            large: 7
// ParkingLot: 
    - ParkingVehicle: 
        - Once the vehicle is parked 
        - Decrese count of relevant slot by 1
    - ExitVechicle
        - Once the amount is paid
        - Increase the count of relevant slot by 1
    - 

#### Draw a class diagram


#### Discuss edge cases / Scale the design / Design extension
