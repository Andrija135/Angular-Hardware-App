import { Injectable } from '@angular/core';
import { Hardware } from '../hardware';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HardwareService {
  private hardwaresUrl = 'http://localhost:8080/hardware';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getHardwares(): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.hardwaresUrl).pipe(
      tap((_) => console.log('fetched hardwares')),
      catchError(this.handleError<Hardware[]>('getHardwares', []))
    );
  }

  addHardware(hardware: Hardware): Observable<Hardware> {
    return this.http
      .post<Hardware>(this.hardwaresUrl, hardware, this.httpOptions)
      .pipe(
        tap((newHardware: Hardware) =>
          console.log(`added hardware w/ code=${newHardware.code}`)
        ),
        catchError(this.handleError<Hardware>('addHardware'))
      );
  }

  deleteHardware(hardware: Hardware | string): Observable<Hardware> {
    const code = typeof hardware === 'string' ? hardware : hardware.code;
    const url = `${this.hardwaresUrl}/${code}`;

    console.log(url);

    return this.http.delete<Hardware>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted hardware code=${code}`)),
      catchError(this.handleError<Hardware>('deleteHardware'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
