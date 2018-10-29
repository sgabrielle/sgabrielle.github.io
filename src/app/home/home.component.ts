import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private endpoints: EndpointsService) {
  }

  ngOnInit() {}

}
