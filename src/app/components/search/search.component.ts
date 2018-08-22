<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

=======
import { Component } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  artists: any []  = [];
  constructor( private spotifyService:SpotifyService ) {
  }
  
  search(pattern: string){
    console.log(pattern);
    this.spotifyService.getArtist(pattern)
    .subscribe((data:any) =>{
      this.artists = data;
      console.log(this.artists);
    })
  }


>>>>>>> origin/master
}
