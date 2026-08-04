import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PetService } from '../services/pet.service';

export interface PeriodicElement {
  petId: number;
  petName: string;
  petAge: string;
  dateOfAdd: string;
  dateOfExit: string;
  petGender: string;
  petCategory: string;
  petRoutine: string;
  petFood: string;
  petDietRoutine: string;
  petDose: string;
  petDoseRoutine: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'petId',
    'petName',
    'petAge',
    'dateOfAdd',
    'dateOfExit',
    'petGender',
    'petCategory',
    'petRoutine',
    'petFood',
    'petDietRoutine',
    'petDose',
    'petDoseRoutine',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private _PetService: PetService) {}

  ngOnInit(): void {
    this.getPetList();
  }

  getPetList() {
    this._PetService.getPets().subscribe({
      next: (res: PeriodicElement[]) => {
        this.dataSource.data = res;
      },
      error: console.error
    });
  }

  deletePet(petId: number) {
    this._PetService.deletePet(petId).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter(pet => pet.petId !== petId);
        console.log(`Pet with ID ${petId} deleted successfully`);
      },
      error: console.error
    });
  }
}
