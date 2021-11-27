import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };

    this.router.navigate(['/user-home'], navigationExtras).then(value => console.log(value));
  }
}
