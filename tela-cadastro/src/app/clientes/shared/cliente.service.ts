import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  save(data: any): Observable<any> {
    return this.httpClient.post<Cliente>(
      `${this.url}/cliente`,
      data
    );
  }
}
