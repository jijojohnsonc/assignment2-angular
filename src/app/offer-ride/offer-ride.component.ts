import { Component } from '@angular/core';
import { CarModel } from '../car.model';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent {
  carModel: CarModel;
  constructor(){
    this.carModel = new CarModel();
  }

  onSubmitHandler(){
    console.log(this.carModel)
  }
}
