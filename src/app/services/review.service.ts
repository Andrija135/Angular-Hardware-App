import { Injectable } from '@angular/core';
import { Review } from '../interfaces/review';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviewsUrl = 'http://localhost:8080/reviews/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getReviewsByCode(code: string | null): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl + code).pipe(
      tap((_) => console.log('fetched reviews')),
      catchError(this.handleError<Review[]>('getReviews', []))
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
