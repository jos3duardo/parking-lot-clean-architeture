import ParkingLot from "./ParkingLot";

export default class EnterParkingLot {
    constructor() {
    }

    execute(){
        const parkingLot = new ParkingLot('Shopping', 100, 8, 2);
        return parkingLot;
    }
}