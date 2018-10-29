import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class AuthService {
  private _token: string;

  constructor(@Inject(DOCUMENT) private document: any) {
    const currentUser = localStorage.getItem('currentUser');
    this._token = currentUser && JSON.parse(currentUser).token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser && this.isValidToken(currentUser)) {
      return true;
    }
    this.logout();
    return false;
  }

  login(token: string, today = moment()) {
    localStorage.setItem('currentUser', JSON.stringify({
      token: token,
      expires: moment(today).add(2, 'h').unix()
    }));
  }

  auth() {
    const hostname = this.document.location.origin;
    this.document.location.href = `${environment.spotify.auth}?client_id=${environment.auth.client_id}&response_type=code&redirect_uri=${environment.auth.redirect_uri}&scope=user-read-private user-read-email&state=34fFs29kd09`;
  }

  logout() {
    this._token = null;
    localStorage.removeItem('currentUser');
  }

  private isValidToken(currentUser: string): boolean {
    const tokenObject = JSON.parse(currentUser);
    if (!tokenObject.expires || !tokenObject.token) {
      return false;
    }
    const expirationDate = moment(tokenObject.expires.toString(), 'X');
    return tokenObject.token && expirationDate.isAfter(moment());
  }
}
