import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Vehicle} from '../vehicle';
import {VehicleObserver} from './vehicle.observer';

@Injectable()
export class VehicleService {
  private baseUrl: string = 'http://localhost:8080/api/hello/';
  constructor(private http: Http){
  }
  public getSingle = (id: number): Observable<Vehicle> => {
    return this.http.get(this.baseUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getAll = (): Observable<Vehicle[]> => {
    return this.http.get(this.baseUrl)
      .map((res:Response) => res.json().content)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  public initialize(vehicleObserver: VehicleObserver){
    this.getAll().subscribe(vehicleObserver);
  }
}
