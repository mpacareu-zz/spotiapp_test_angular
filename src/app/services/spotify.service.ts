import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQCPTRDxgF-JanAc4CKzBMQgSbYDQy0mqOmLBLwscjNSKTYQN8zR1ALQ9onNSB7VQ1FTMeEpmGMcvV8GwuI'
    });
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers})
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe(data =>{
      console.log(data);
    })
   }

  getNewReleases(){

  }
}
