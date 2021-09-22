export default class ParkingLot {
    code: any;
    capacity: any;
    closeHour: any;
    openHour: any;

    constructor(code: any, capacity:any, openHour:any, closeHour:any ) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
}