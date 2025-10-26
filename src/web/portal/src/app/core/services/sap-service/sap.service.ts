import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SapUser {
  pernr: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  positionId: number;
  positionText: string;
}

export interface SapUser {
  pernr: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  positionId: number;
  positionText: string;
}

@Injectable({
  providedIn: 'root'
})
export class SapService {
  private apiUrl = 'http://localhost:5209/sap';

  constructor(private http: HttpClient) {}

  getEmployee(pernr: string): Observable<SapUser> {
    return this.http.get<SapUser>(`${this.apiUrl}/employee/${pernr}`);
  }

  test(): Observable<string> {
    return this.http.get(`${this.apiUrl}/ping`, { responseType: 'text' });
  }
}
