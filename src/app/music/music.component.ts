import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  currentlyPlaying: any;
  externalUrl;
  preview;

  constructor(private authService: AuthService, private endpoints: EndpointsService) { }

  ngOnInit() {
   
    console.log(JSON.parse(localStorage.getItem('code')))
  }

  getMusic() {
    this.currentlyPlaying = this.endpoints.getCurrentlyPlaying();
  }

  getToken() {
    this.endpoints.getToken().subscribe(data=>{
      console.log(data)
    })
  }
}
