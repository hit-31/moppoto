import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// Application imports
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private http: HttpClient) { }

  /** GET Request*/
  getCall(url: string, id?: number): Observable<any> {
    return this.http.get<any>(this.getFullUrl(url)).pipe(
      tap(_ => this.log(`fetched =${id}`)),
      catchError(this.handleError<any>(`${id}`))
    );
  }

  /** POST Request*/
  postCall(url: string, payloadObject : any): Observable<any> {
    return this.http.post<any>(this.getFullUrl(url),payloadObject).pipe(
      tap(_ => this.log(`fetched =${payloadObject}`)),
      catchError(this.handleError<any>(payloadObject))
    );
  }

  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    return environment.API_BASE_URL + url;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
  
}
