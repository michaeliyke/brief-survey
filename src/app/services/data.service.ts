import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../assets/Payload.json';

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]> {
   return  this.http.get<any[]>(this.dataUrl).pipe(
     tap((data) => {
       return console.log('From server', JSON.stringify(data))
     }),
     catchError(this.handleError)
   );
  }

  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = `An error occured: ${error.error.message}`;
    } else {
      msg = `Server retured code: ${error.status}, error message is ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
