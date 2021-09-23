import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import ParkingLot from "../../core/entity/ParkingLot";
import database from "../database/database";
import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {

    async getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = await database.oneOrNone(
            "select *, (select count(*) as occupied_spaces from parked_car pc where pc.code = pl.code)::int  from parking_lot pl where pl.code = $1", [code]
        )
        return ParkingLotAdapter.create(
            parkingLotData.code,
            parkingLotData.capacity,
            parkingLotData.openHour,
            parkingLotData.closeHour,
            parkingLotData.occupied_spaces
        )
    }

    async saveParkedCar(code:string, plate: string, date: Date): Promise<void> {
        await  database.none("insert into parked_Car (code, plate, date) values ($1, $2, $3)", [code, plate, date])
    }

}