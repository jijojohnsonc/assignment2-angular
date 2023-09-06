import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent {
  constructor(private formBuilder: FormBuilder){ }

  carForm = this.formBuilder.group({
    name: [null, Validators.required],
    startLocation: [null, Validators.required],
    destination: [null, Validators.required],
    car: [null, Validators.required],
    seatsAvailable: [null, Validators.required]
  })

  get name() {
    return this.carForm.get('name')
  }
  get startLocation() {
    return this.carForm.get('startLocation')
  }
  get destination() {
    return this.carForm.get('destination')
  }
  get car() {
    return this.carForm.get('car')
  }
  get seatsAvailable() {
    return this.carForm.get('seatsAvailable')
  }
  
  onSubmitHandler(){
    console.log(this.carForm.value)
  }
}
