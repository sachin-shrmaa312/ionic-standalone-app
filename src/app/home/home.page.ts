import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonInfiniteScroll, IonInfiniteScrollContent,InfiniteScrollCustomEvent,IonLabel, IonBadge,IonList, IonItem, IonSkeletonText, IonAvatar, IonAlert} from '@ionic/angular/standalone';
import { MovieService } from '../service/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../service/interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonSkeletonText,
  IonAvatar,
  IonAlert,
  IonLabel,
  DatePipe,
  IonBadge,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  RouterModule],
})
export class HomePage {
  public movieService = inject(MovieService);
  public currentPage = 1;
  public error = null;
  public isLoading = false;
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movies: MovieResult[] = [];
  public dummyArray = new Array(5);


  constructor() { this.loadMovies()}

  loadMovies(event?: InfiniteScrollCustomEvent) {

    this.error = null;
    if (!event) {
      this.isLoading = true;
    }

    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(() => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }),
      catchError((err: any)=> {
        console.error(err);

        this.error = err.error.status_message;
        return [];
      })
    ).subscribe({
      next: (res) => {
        console.log(res);
        
        this.movies.push(...res.results);
        if (event) {          
          event.target.disabled = res.total_pages === this.currentPage;
        }
      }


    })
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
  

}
