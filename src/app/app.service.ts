import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ServiceResponseEl {
  Lab: string;
  Location: string;
  Positive: number;
  Negative: number;
  Inconclusive: number;
  Total: number;
}

export interface TableDataRow {
  lab: string;
  location: string;
  positive: number;
  negative: number;
  inconclusive: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAggregateData(): Observable<TableDataRow[]> {
    return this.http.get<ServiceResponseEl[]>('assets/json/granite-1k-aggregate.json')
      .pipe(map(data => data.map((e: ServiceResponseEl) => ({
        lab: e.Lab,
        location: e.Location,
        positive: e.Positive,
        negative: e.Negative,
        inconclusive: e.Inconclusive,
        total: e.Total
      }))));
  }
}
