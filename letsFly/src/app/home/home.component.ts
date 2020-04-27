import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/apiService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public artists: any[];
  public artistFilter: any[];

  constructor(private apiServiceService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiServiceService.getTopArtist().subscribe(data => {
      this.artists = [];
      data.artists.artist.forEach((element: any) => {
        this.artists.push({
          url: element.url,
          name:  element.name
          // data:  element.name.data()
        });
        console.log(this.artists);

      });
      //this.artistFilter = this.artists.filter(artist => artist.data.artist.id === id);
      //    console.log(this.artistFilter);
      // console.log(artistImg);
    });
    this.apiServiceService.getTopTraks().subscribe(data => {
      console.log('no se que es', data);

    })
  }

}
