import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  search(pattern: string) {
    if (pattern.length > 0) {
      this.loading = true;
      this.spotifyService.getArtist(pattern).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
    } else {  this.artists = null;
    }
  }
}
