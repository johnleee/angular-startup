import { Component } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleObserver } from './service/vehicle.observer';
import { VehicleService } from './service/vehicle.service';

const CARS: Vehicle[] = [
  { id: 11, content: 'Audi' },
  { id: 12, content: 'Bugatti' },
  { id: 13, content: 'Chev' },
  { id: 14, content: 'Dodge'},
];

@Component({
  selector: 'vehicle-home',
  templateUrl: './vehicle.component.html',
})

export class VehicleComponent {
  public constructor(vehicleObserver: VehicleObserver, vehicleService: VehicleService) {
    vehicleObserver.attach(this);
    vehicleService.initialize(vehicleObserver);
  }
  cars = CARS;
  public setVehicle(vehicle: Vehicle) {
    this.cars = [vehicle];
  }
  public setVehicles(vehicles: Vehicle[]) {
    this.cars = vehicles;
  }

}
