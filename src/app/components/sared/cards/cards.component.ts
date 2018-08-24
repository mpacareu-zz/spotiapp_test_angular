import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any [] = [];
  constructor( private router: Router) {

   }

  viewArtist(item: any) {
    console.log (item);
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;

    }
    if (item.type === 'album') {
      artistId = item.artists[0].id;

    }
    this.router.navigate (['/artist', artistId]);

  }


}
