class CarMaintenanceHistoryModel {
    id: number;
    carId: number;
    maintenanceType: string;
    maintenanceDate: string; // Assuming you store the date as a string, adjust as needed
    maintenanceKilometers: number;

    constructor(
        id: number,
        carId: number,
        maintenanceType: string,
        maintenanceDate: string,
        maintenanceKilometers: number
    ) {
        this.id = id;
        this.carId = carId;
        this.maintenanceType = maintenanceType;
        this.maintenanceDate = maintenanceDate;
        this.maintenanceKilometers = maintenanceKilometers;
    }
}

export default CarMaintenanceHistoryModel;
