import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component'; 
import { MusicComponent } from './music/music.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'music',
      component: MusicComponent
      // ,
      // canActivate: [AuthGuard]
    },
    {
      path: 'callback',
      component: CallbackComponent
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: ''}
  ];
  
export const routing = RouterModule.forRoot(routes);