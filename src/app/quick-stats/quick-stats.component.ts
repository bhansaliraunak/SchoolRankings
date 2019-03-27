import { Component, OnInit } from '@angular/core';
import { School } from '../model/school';

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})

export class QuickStatsComponent implements OnInit {

  school: School[];
  constructor() {
  
    this.school = JSON.parse(localStorage.getItem('school'));
  }

  ngOnInit() {
  }

}
