import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
    constructor(private parkingLotRepository: ParkingLotRepository) {
    }

    execute(code: string) {
        return this.parkingLotRepository.getParkingLot(code)
    }
}