import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
  petForm: FormGroup;
  progressValue = 0;
  constructor(private _fb: FormBuilder, private _PetService: PetService) {
    this.petForm = this._fb.group({
      PetName: ['', Validators.required],
      PetAge: ['', Validators.required],
      DateOfAdd: ['', Validators.required],
      DateOfExit: ['', Validators.required],
      PetGender: ['', Validators.required],
      PetCategory: ['', Validators.required],
      PetRoutine: ['', Validators.required],
      PetFood: ['', Validators.required],
      PetDietRoutine: ['', Validators.required],
      PetDose: ['', Validators.required],
      PetDoseRoutine: ['', Validators.required],
    });
  }

  onSubmit(): void {
    debugger
    if(this.petForm.valid){
      this.progressValue = 100;
    console.log(this.petForm.value);
    this._PetService.petPost(this.petForm.value).subscribe(
      response => {
        console.log('Pet details submitted successfully', response);
        this.petForm.reset();
      },
      error => {
        console.error('Error submitting pet details', error);
      }
    );
  } else{
    alert("The Form Is Not Valid!");
  }
  }

  reset() {
    this.petForm.reset();
    this.progressValue = 0;
  }
}
