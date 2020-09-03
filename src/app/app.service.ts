import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface LabTestServiceResponseEl {
  Lab: string;
  Location: string;
  Positive: number;
  Negative: number;
  Inconclusive: number;
  Total: number;
}

interface LabPaymentServiceResponseEl {
  Lab: string;
  Location: string;
  CreditCard: number;
  ThirdParty: number;
  Uninsured: number;
  Total: number;
}

export interface LabTestDataEl {
  lab: string;
  location: string;
  positive: number;
  negative: number;
  inconclusive: number;
  total: number;
}

export interface LabPaymentDataEl {
  lab: string;
  location: string;
  creditCard: number;
  thirdParty: number;
  uninsured: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getLabTestsData(): Observable<LabTestDataEl[]> {
    return this.http.get<LabTestServiceResponseEl[]>('assets/json/granite-labs.json')
      .pipe(map(data => data.map((e: LabTestServiceResponseEl) => ({
        lab: e.Lab,
        location: e.Location,
        positive: e.Positive,
        negative: e.Negative,
        inconclusive: e.Inconclusive,
        total: e.Total
      }))));
  }

  getLabPaymentsData(): Observable<LabPaymentDataEl[]> {
    return this.http.get<LabPaymentServiceResponseEl[]>('assets/json/granite-payments.json')
      .pipe(map(data => data.map((e: LabPaymentServiceResponseEl) => ({
        lab: e.Lab,
        location: e.Location,
        creditCard: e.CreditCard,
        thirdParty: e.ThirdParty,
        uninsured: e.Uninsured,
        total: e.Total
      }))));
  }
}
