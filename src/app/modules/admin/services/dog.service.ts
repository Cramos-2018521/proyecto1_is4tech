import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DogResponse } from '../components/dogs/dog-response.type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private httpClient: HttpClient) {}

  getDog(): Observable<DogResponse> {
    return this.httpClient.get<DogResponse>(environment.dogApiUrl).pipe(
      tap((res) => {
        if (res.status !== 'success') throw new Error('Request failed');
      }),
      catchError((err) => {
        console.log(err);
        throw new Error('Request failed');
      })
    );
  }
}
