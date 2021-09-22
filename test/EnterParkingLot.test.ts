import EnterParkingLot from "../src/core/usecase/EnterParkingLot";

it('should  enter parking lot', function () {
    const enterparkingLot = new EnterParkingLot();
    const parkingLot = enterparkingLot.execute();

    expect(parkingLot.code).toBe("Shopping")
});