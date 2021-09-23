import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";


it('should  get parking lot', async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLot = await getParkingLot.execute("shopping")

    expect(parkingLot.code).toBe("shopping")
});

it('should  enter parking lot', async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");

    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T07:00:00"));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
});
