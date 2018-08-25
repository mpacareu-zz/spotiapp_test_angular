import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any [] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
    .subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (error)=>{
        this.loading = false;
        this.error = true;
        this.errorMessage = error.error.error.message;
    });
   }

}
