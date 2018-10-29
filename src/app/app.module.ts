import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AuthService } from './services/auth.service';
import { EndpointsService } from './services/endpoints.service';


import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    EndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
