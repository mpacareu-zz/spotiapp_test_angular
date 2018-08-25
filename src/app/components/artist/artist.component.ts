import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  
  artist : any = {};
  loading: boolean;
  topTracks: any [] = [];

  constructor( private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist ( id: string ){
    this.loading = true;
    this.spotifyService.getArtist (id)
    .subscribe(artist=>{
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks( id: string ){
    this.spotifyService.getTopTracks(id)
    .subscribe( topTracks=>{
      console.log(topTracks);
        this.topTracks = topTracks;
      

    });
  }
}
