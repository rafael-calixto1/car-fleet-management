class OilChangeHistoryModel {
    id: number;
    carId: number;
    oilChangeDate: string; 
    oilChangeKilometers: number;

    constructor(
        id: number,
        carId: number,
        oilChangeDate: string,
        oilChangeKilometers: number
    ) {
        this.id = id;
        this.carId = carId;
        this.oilChangeDate = oilChangeDate;
        this.oilChangeKilometers = oilChangeKilometers;
    }
}

export default OilChangeHistoryModel;
