class TireChangeHistoryModel {
    id: number;
    carId: number;
    tireChangeDate: string; 
    tireChangeKilometers: number;

    constructor(
        id: number,
        carId: number,
        tireChangeDate: string,
        tireChangeKilometers: number
    ) {
        this.id = id;
        this.carId = carId;
        this.tireChangeDate = tireChangeDate;
        this.tireChangeKilometers = tireChangeKilometers;
    }
}

export default TireChangeHistoryModel;
