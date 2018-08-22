import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  countriesArray: any [] = [];
  constructor( private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (countries: any) => {
      this.countriesArray = countries;
      console.log(countries);
    });
   }

  ngOnInit() {
  }

=======
import { SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any [] = [];
  constructor( private spotifyService:SpotifyService ) {
    this.spotifyService.getNewReleases()
    .subscribe((data:any) =>{
      this.newReleases = data;
      console.log(this.newReleases);
    })
   }

>>>>>>> origin/master
}
