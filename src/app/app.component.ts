import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { EndpointsService } from './services/endpoints.service';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">

      <button
        class="btn btn-primary btn-margin"
        routerLink="/">
          Home
      </button>

      <button
      (click)="auth.auth()"
      class="btn btn-primary btn-margin"
      routerLink="/music">
        Music
    </button>

    </div>
  </div>
</nav>

<main class="container">
  <router-outlet></router-outlet>

  `
})
export class AppComponent {

  constructor(private auth: AuthService) { }
}