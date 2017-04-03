import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VehicleComponent } from './vehicle.component';
import { VehicleObserver } from './service/vehicle.observer';
import { VehicleService } from './service/vehicle.service';

@NgModule({
    declarations: [
        VehicleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
    ],
    providers: [VehicleService, VehicleObserver],
    bootstrap: [VehicleComponent],
    exports: [VehicleComponent],
})

export class VehicleModule { }
