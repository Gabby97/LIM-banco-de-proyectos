import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  private apiUrl: string;
  private apiKey: string;
   constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl; // 'http://ws.audioscrobbler.com/2.0/';
    this.apiKey =  environment.apiKey; // 'db54a815987b4c5fe3a543ccf1a9dece';
   }
  getTopArtist(): Observable<any> {
   // const urlApi = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=db54a815987b4c5fe3a543ccf1a9dece&format=json`;
    return this.http.get(`${this.apiUrl}?method=chart.gettopartists&api_key=${this.apiKey}&format=json`);
  }
  getTopTraks(): Observable<any> {
  return this.http.get(`${this.apiUrl}?method=chart.gettopartists&api_key=${this.apiKey}&format=json`);
  }
 /*  getArtistById(name: string) {
    const urlApi = `http://ws.audioscrobbler.com/2.0/?methos=artists.getInfo/${name}`;
    return (this.artist = this.http.get(urlApi));
  } */
}
// gettoptracks --> nombre artista / canciones
 /* private url: string;
  artists: Observable<any>;
  artist: Observable<any>; */
  // baseUrl = environment.apiUrl + metodh + tokenName;
  // apiKey = 'db54a815987b4c5fe3a543ccf1a9dece';
 // apiKey = 'db54a815987b4c5fe3a543ccf1a9dece';
// private ejemplo = new BehaviorSubject([]);
// currentData = this.ejemplo.asObservable();
   // Funcion que devuelva el sytring de url
  // headers: HttpHeaders = new HttpHeaders({})
