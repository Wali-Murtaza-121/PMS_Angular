import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  paymentDetailId: number;
  cardOrnerName: string;
  cardOrnernumber: string;
  expirationDate: string;
  securityDate: string;
}

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrl: './payment-detail.component.css'
})
export class PaymentDetailComponent implements OnInit{
  displayedColumns: string[] = [
    'paymentDetailId',
    'cardOrnerName',
    'cardOrnernumber',
    'expirationDate',
    'securityDate',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private _PetService: PetService) {}

  ngOnInit(): void {
    this.getPaymentList();
  }

  getPaymentList() {
    this._PetService.getPayment().subscribe({
      next: (res: PeriodicElement[]) => {
        this.dataSource.data = res;
      },
      error: console.error
    });
  }
}
