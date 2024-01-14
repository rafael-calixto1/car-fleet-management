class FuelingHistoryModel {
    id: number;
    carId: number;
    fuelAmount: number;
    fuelDate: string;
    fuelingKilometers: number;

    constructor(
        id: number,
        carId: number,
        fuelAmount: number,
        fuelDate: string,
        fuelingKilometers: number
    ) {
        this.id = id;
        this.carId = carId;
        this.fuelAmount = fuelAmount;
        this.fuelDate = fuelDate;
        this.fuelingKilometers = fuelingKilometers;
    }
}

export default FuelingHistoryModel;
