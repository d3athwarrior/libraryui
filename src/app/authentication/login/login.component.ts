import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: any;

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
    this.authService.login(this.userId).subscribe(response => {
      this.authService.isLoggedIn = true;
      this.authService.loggedInUserId = response;
      if (response != -1) {
        this.router.navigate([this.authService.redirectUrl || '/user-home'], navigationExtras).then(value => {
          if (!value)
            console.log(value);
        });
      } else {
        /*
         * Preferably a material dialog should be shown or a field on the UI should be used to show error
         */
          alert("Invalid user")
        }
      });
    // }
  }
}
