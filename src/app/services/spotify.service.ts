import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{ map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  albums: any [] = [];
  constructor( private http: HttpClient) {
  }

  getQuery( query: string){

    const URL = `https://api.spotify.com/v1/${ query }`;
  
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAo4T0QbqNJezCNqk5Y53T6HrLV4qYnoEzv3Wsctv5XG1i_si_QfsgFgemrXAWBUuY3mkYQPu7HPO4H6fg'
    });
    return this.http.get (URL, {headers});

  }
  
  getNewReleases(){
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers})
    return this.getQuery('browse/new-releases')
            .pipe ( map ( data => data['albums'].items ));
  }

  getArtist(pattern: string){
    
    return this.getQuery(`search?q=${pattern}&type=artist&limit=15`)
            .pipe ( map ( data =>  data['artists'].items));
  }
}
