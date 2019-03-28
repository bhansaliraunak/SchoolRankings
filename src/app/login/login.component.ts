import { Component, OnInit, AfterViewInit } from '@angular/core';
import '../../assets/js/login-animation.js';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(){
    this.router.navigateByUrl('/');
  }

}
