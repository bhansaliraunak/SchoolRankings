import { Component, OnInit } from '@angular/core';
import { School } from '../model/school';

@Component({
  selector: 'app-school-tabs-nav',
  templateUrl: './school-tabs-nav.component.html',
  styleUrls: ['./school-tabs-nav.component.scss']
})

export class SchoolTabsNavComponent implements OnInit {

  school: School;
  constructor() {
    
this.school = JSON.parse(localStorage.getItem('school'));
  }

  ngOnInit() { }

}
