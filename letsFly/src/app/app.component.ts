import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from './service/apiService.service';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'letsFly';
  // artist: any;
  // name = '';
  constructor() { }

    ngOnInit() {
  }
  }
  // No serviraaaaaa
   // recorrecore al array artist
  /*getListArtist(): void  {
    this.apiServiceService.getAllArtist().subscribe(data => {
      console.log(data);

      /*  data.artists.artist.forEach(element => {
        console.log(element);
      }); */
    /*   data.artists.artist.forEach(element => {
        console.log(element.name);
      }); */
    // });
  // }
/*
  ejemplo(): void {
    this.apiServiceService.getData().subscribe(data => {
      console.log('funciono', data);

    }); */
