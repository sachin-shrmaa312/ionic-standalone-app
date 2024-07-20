import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interface';


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '6faa9fadd4616078eb9a7a5514570483'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient)

  constructor() { 
  }

  getTopRatedMovies(page =1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`).pipe(delay(3000));
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);    
    
  }
}
