import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: any;

  constructor(private router: Router, private authService: AuthService) {
  }

  login() {
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    // if (!environment.production) {
    //   this.authService.isLoggedIn = true;
    //   this.authService.loggedInUserId = 1;
    //   this.router.navigate(['/user-home'], navigationExtras).then(value => {
    //   });
    // } else {
      this.authService.login(this.userName).subscribe(response => {
        this.authService.isLoggedIn = true;
        this.authService.loggedInUserId = response;
        this.router.navigate(['/user-home'], navigationExtras).then(value => {
          if(!value)
            console.log(value);
        });
      });
    // }
  }
}
