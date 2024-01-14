class CarModel {
    id: number;
    make: string;
    model: string;
    currentKilometers: number;
    nextTireChange: number;
    isNextTireChangeBigger: boolean;
    nextOilChange: number;
    isNextOilChangeBigger: boolean;
    driverId?: number;

    constructor(
        id: number,
        make: string,
        model: string,
        currentKilometers: number,
        nextTireChange: number,
        isNextTireChangeBigger: boolean,
        nextOilChange: number,
        isNextOilChangeBigger: boolean,
        driverId?: number
    ) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.currentKilometers = currentKilometers;
        this.nextTireChange = nextTireChange;
        this.isNextTireChangeBigger = isNextTireChangeBigger;
        this.nextOilChange = nextOilChange;
        this.isNextOilChangeBigger = isNextOilChangeBigger;
        this.driverId = driverId;
    }
}

export default CarModel;
