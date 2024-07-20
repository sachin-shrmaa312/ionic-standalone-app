import { Component, inject, Inject, Input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList,
  IonItem,
  IonSkeletonText,
  IonAvatar,
  IonAlert,
  IonLabel,
  IonButtons,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonCardHeader,
  IonBackButton,
  IonBadge,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
  
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieService } from '../service/movie.service';
import { MovieResult } from '../service/interface';
import { addIcons} from 'ionicons';
import { cashOutline, calendarOutline} from 'ionicons/icons';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [CommonModule,
  FormsModule,
    IonHeader,
    IonCardSubtitle,
  IonCardHeader,
  IonToolbar,
    IonCardTitle,
    IonIcon,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonCard,
  IonContent,
  IonList,
    IonItem,
    IonText,
    IonCardContent,
  IonSkeletonText,
  IonAvatar,
  IonAlert,
  IonLabel,
  DatePipe,
  IonBadge,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  RouterModule
  ]
})
export class DetailsPage {

  public movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);
  
  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {

      console.log(movie);
      this.movie.set(movie);
      
    })
  }
  constructor() { 
    addIcons({ cashOutline, calendarOutline})
  }

  ngOnInit() {
  }

}
