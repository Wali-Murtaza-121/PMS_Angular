import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'http://localhost:37223/api/Pets';
  private apiUrl1= 'http://localhost:37223/api/PaymentDetails';

  constructor(private http: HttpClient) { }

  petPost(pet: any): Observable<any> {
    return this.http.post(this.apiUrl, pet);
  }

  getPets(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  deletePet(petId: number): Observable<any> {
    const url = `${this.apiUrl}/${petId}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  paymentPost(payment: any): Observable<any> {
    return this.http.post(this.apiUrl1, payment);
  }
  getPayment(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }
}
