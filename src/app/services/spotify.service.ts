import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  albums: any [] = [];
  constructor( private http: HttpClient) {
  }

  getQuery( query: string) {

    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDHBCYh6bIuF3JuRwlQRQ9QhAsBFWC70Z5H69KPB02pKUI3G1_FqkF0KaiQWeUOeSWFUgitobm3goe1XAE'
    });
    return this.http.get (URL, {headers});

  }

  getNewReleases() {
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers})
    return this.getQuery('browse/new-releases')
            .pipe ( map ( data => data['albums'].items ));
  }

  getArtists(pattern: string) {

    return this.getQuery(`search?q=${pattern}&type=artist&limit=15`)
            .pipe ( map ( data =>  data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe ( map ( data =>  data['tracks']));
  }
}
