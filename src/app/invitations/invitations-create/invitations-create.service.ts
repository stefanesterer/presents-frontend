import { Injectable } from '@angular/core';
import { InvitationCreate } from './invitation-create';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Uuid } from './Uuid';

@Injectable()
export class InvitationsCreateService {

  private invitationsUrl = 'http://localhost:8080/invitation';

  constructor(private http: HttpClient) { }

  create(invitationCreate: InvitationCreate): Observable<Uuid> {
    console.log(invitationCreate);
    return this.http.post<InvitationCreate>(this.invitationsUrl, invitationCreate)
      .pipe(
        catchError(this.handleError('getHeroes', null))
      );
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
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
