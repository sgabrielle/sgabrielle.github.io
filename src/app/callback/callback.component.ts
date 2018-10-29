import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'app-callback',
  template: `
  <div> 
   Loading...
   </div>
  `
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    Observable.zip(this.route.queryParams, this.route.data).subscribe(val => {
      localStorage.setItem('code', JSON.stringify(val[0].code));
      this.router.navigate(['/music']);
    });
  }
}
