import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../services/school.service';
import { School} from '../model/school';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})


export class SchoolDetailComponent implements OnInit {
  school: School[];
  id: Number;

  public pie_ChartData = [
    ['Students', 'Seats'],
    ['Total Seats (150)', 150],
    ['Applied (80)', 80],
    ['Accepted (50)', 50]
  ];

  public pie_ChartOptions = {
    title: 'Students',
    width: 430,
    legend: { position: 'none' },
    chart: {
      title: 'Students',
      subtitle: '(full time)'
    },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Students' } // Top x-axis.
      }
    },
    bar: { groupWidth: '50%' }
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    this.getSchool(this.id);

  }

  async getSchool(id: Number) {

    await this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
      localStorage.setItem('school', JSON.stringify(this.school));
    });

  }

}
