CREATE DATABASE IF NOT EXISTS gerenciamento_de_frotas;

USE gerenciamento_de_frotas;

CREATE TABLE IF NOT EXISTS drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    license_number VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    current_kilometers DECIMAL(10, 2) NOT NULL DEFAULT 0,
    next_tire_change DECIMAL(10, 2) NOT NULL DEFAULT 0,
    is_next_tire_change_bigger BOOLEAN NOT NULL DEFAULT false,
    next_oil_change DECIMAL(10, 2) NOT NULL DEFAULT 0,
    is_next_oil_change_bigger BOOLEAN NOT NULL DEFAULT false,
    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

CREATE TABLE IF NOT EXISTS fueling_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    fuel_amount DECIMAL(10, 2) NOT NULL,
    fuel_date DATE NOT NULL,
    fueling_kilometers DECIMAL(10, 2) NOT NULL,
    price_per_liter DECIMAL(10, 2) NOT NULL,
    total_cost DECIMAL(10, 2) NOT NULL,
    fuel_type VARCHAR(255) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

CREATE TABLE IF NOT EXISTS tire_change_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    tire_change_date DATE NOT NULL,
    tire_change_kilometers DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

CREATE TABLE IF NOT EXISTS car_maintenance_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    maintenance_type VARCHAR(255) NOT NULL,
    maintenance_date DATE NOT NULL,
    maintenance_kilometers DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

CREATE TABLE IF NOT EXISTS oil_change_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    oil_change_date DATE NOT NULL,
    oil_change_kilometers DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

INSERT INTO drivers (name, license_number) VALUES
('John Doe', 'ABC123'),
('Jane Smith', 'XYZ456'),
('Michael Johnson', 'DEF789'),
('Emily Davis', 'GHI012'),
('David Brown', 'JKL345'),
('Sarah Wilson', 'MNO678'),
('Brian Miller', 'PQR901'),
('Olivia Taylor', 'STU234'),
('Daniel White', 'VWX567'),
('Grace Martinez', 'YZA890');

INSERT INTO cars (make, model, current_kilometers, next_tire_change, is_next_tire_change_bigger, next_oil_change, is_next_oil_change_bigger, driver_id) VALUES
('Toyota', 'Camry', 50000.50, 60000.00, false, 7000.75, true, 1),
('Honda', 'Civic', 45000.25, 55000.00, true, 8000.00, false, 2),
('Ford', 'Focus', 60000.75, 70000.00, false, 6000.25, true, 3),
('Chevrolet', 'Malibu', 48000.50, 58000.00, true, 7500.50, false, 4),
('Nissan', 'Altima', 52000.00, 62000.00, false, 7200.00, true, 5),
('Hyundai', 'Elantra', 55000.25, 65000.00, true, 6800.25, false, 6),
('Kia', 'Optima', 51000.75, 61000.00, false, 7300.75, true, 7),
('Mazda', 'Mazda3', 49000.00, 59000.00, true, 7700.00, false, 8),
('Subaru', 'Impreza', 53000.50, 63000.00, false, 7100.50, true, 9),
('Volkswagen', 'Jetta', 58000.25, 68000.00, true, 6500.25, false, 10);

INSERT INTO fueling_history (car_id, fuel_amount, fuel_date, fueling_kilometers, price_per_liter, total_cost, fuel_type) VALUES
(1, 40.25, '2024-01-01', 50500.75, 2.50, 100.63, 'Gasoline'),
(2, 35.50, '2024-01-02', 45500.50, 2.75, 97.63, 'Diesel'),
(3, 45.75, '2024-01-03', 60600.00, 2.30, 105.23, 'Gasoline'),
(4, 38.00, '2024-01-04', 48400.25, 2.40, 91.20, 'Diesel'),
(5, 42.50, '2024-01-05', 52400.75, 2.60, 110.50, 'Gasoline'),
(6, 37.25, '2024-01-06', 55300.50, 2.70, 100.58, 'Diesel'),
(7, 44.00, '2024-01-07', 51300.00, 2.45, 107.80, 'Gasoline'),
(8, 36.75, '2024-01-08', 49300.25, 2.55, 93.94, 'Diesel'),
(9, 41.00, '2024-01-09', 53300.50, 2.65, 108.65, 'Gasoline'),
(10, 39.50, '2024-01-10', 58300.00, 2.85, 112.57, 'Diesel');

INSERT INTO tire_change_history (car_id, tire_change_date, tire_change_kilometers) VALUES
(1, '2023-05-01', 60000.00),
(2, '2023-06-02', 55000.00),
(3, '2023-07-03', 70000.00),
(4, '2023-08-04', 58000.00),
(5, '2023-09-05', 62000.00),
(6, '2023-10-06', 65000.00),
(7, '2023-11-07', 61000.00),
(8, '2023-12-08', 59000.00),
(9, '2024-01-09', 63000.00),
(10, '2024-02-10', 68000.00);

INSERT INTO car_maintenance_history (car_id, maintenance_type, maintenance_date, maintenance_kilometers) VALUES
(1, 'Brake Replacement', '2023-05-15', 55000.00),
(2, 'Air Filter Change', '2023-06-20', 50000.00),
(3, 'Coolant Flush', '2023-07-25', 65000.00),
(4, 'Battery Replacement', '2023-08-30', 53000.00),
(5, 'Transmission Fluid Change', '2023-09-30', 57000.00),
(6, 'Spark Plug Replacement', '2023-10-30', 60000.00),
(7, 'Timing Belt Replacement', '2023-11-30', 56000.00),
(8, 'Wheel Alignment', '2023-12-30', 54000.00),
(9, 'Suspension Check', '2024-01-30', 59000.00),
(10, 'Exhaust System Inspection', '2024-02-28', 64000.00);

INSERT INTO oil_change_history (car_id, oil_change_date, oil_change_kilometers) VALUES
(1, '2023-04-01', 50000.00),
(2, '2023-05-02', 45000.00),
(3, '2023-06-03', 60000.00),
(4, '2023-07-04', 48000.00),
(5, '2023-08-05', 52000.00),
(6, '2023-09-06', 55000.00),
(7, '2023-10-07', 51000.00),
(8, '2023-11-08', 49000.00),
(9, '2023-12-09', 53000.00),
(10, '2024-01-10', 58000.00);
