import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  form: FormGroup;
  constructor(private _fb:FormBuilder,private _PetService:PetService){
    this.form = this._fb.group({
      cardOrnerName:['',Validators.required],
      cardOrnernumber:['',Validators.required],
      ExpirationDate:['',Validators.required],
      securityDate:['',Validators.required],
    });
  }
  onSubmit(): void {
    debugger
    if(this.form.valid){
    console.log(this.form.value);
    this._PetService.paymentPost(this.form.value).subscribe(
      response => {
        console.log(response);
        alert("Payment Saved Successfully!");
        this.form.reset();
      },
      error => {
        console.error('Error submitting pet details', error);
      }
    );
  } else{
    alert("The Form Is Not Valid!");
  }
  }
  resetForm(){
    this.form.reset();
  }
}
