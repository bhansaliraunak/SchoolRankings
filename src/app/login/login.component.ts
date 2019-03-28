import {  Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  
  email: string;
  password: string;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
   
  }


  login(){
    this.router.navigateByUrl('/');
  }

  

}
