import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolDetailService } from './school-detail.service';
import { SchoolData } from '../model/school';
import { GoogleChartComponent } from '../google-chart/google-chart.component';


@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css'],
  providers: [SchoolDetailService]
})
export class SchoolDetailComponent implements OnInit {

  public pie_ChartData = [
    ['Students', 'Seats'],
    ['Total Seats (150)', 150],
    ['Applied (80)', 80],
    ['Accepted (50)', 50]
     ];
  public pie_ChartOptions  = {
    title: 'Students',
          width: 430,
          legend: { position: 'none' },
          chart: { title: 'Students',
                   subtitle: '(full time)' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Students'} // Top x-axis.
            }
          },
          bar: { groupWidth: '50%' }
  };

  school;
  id;
  public myJson: SchoolData ;



  constructor(private _activatedRoute: ActivatedRoute, private route: Router, private _schoolDetailService: SchoolDetailService ) { }

  ngOnInit() {



    this.id = this._activatedRoute.snapshot.params.id;

    console.log('ID: ', this.id);
    this._schoolDetailService.getSchool(this.id).subscribe( data => {
      this.getSchool(data);
   });





}

getSchool(data) {

  this.myJson = new SchoolData(Object.values(data)[0], Object.values(data)[1], Object.values(data)[2],
  Object.values(data)[3], Object.values(data)[4], Object.values(data)[5], Object.values(data)[6],
  Object.values(data)[7]);

  this.school = this.myJson.school_name;
  console.log(this.school);
}

  }


