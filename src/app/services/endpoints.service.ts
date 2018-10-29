import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EndpointsService {
    private token;
    private currently_playing_URI = environment.spotify.spotify_currently_playing;
    private httpOptions: {
        headers: HttpHeaders
    };

    constructor(private http: HttpClient, private authService: AuthService) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic MmZhYTJiODI0MWNlNDA0NWFjM2YxOWUxN2NlZThkZTc6ZWI5NzRkNWIxMTMzNGE3ZWI5YmUyZDY1YWRmNTUwMWM='
                // 'Authorization': 'Basic' + window.btoa(environment.auth.client_id + ':' + environment.auth.client_secret)
            })
        };
    }

    getToken() {
        
        let body = {
            grant_type: 'authorization_code',
            code: JSON.parse(localStorage.getItem('code')),
            redirect_uri: environment.auth.redirect_uri
        }

        return this.http.post(`${environment.spotify.token_uri}`, body, this.httpOptions);
    }

    getCurrentlyPlaying() {
        return this.http.get(`${this.currently_playing_URI}`, this.httpOptions);
    }

}