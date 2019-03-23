import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolDetailService } from '../services/school-detail.service';
import { SchoolData } from '../model/school';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css'],
  providers: [SchoolDetailService]
})
export class SchoolDetailComponent implements OnInit {

  school: SchoolData[];
  id: Number;
  
  public pie_ChartData = [
    ['Students', 'Seats'],
    ["Total Seats (150)", 150],
    ["Applied (80)", 80],
    ["Accepted (50)", 50]
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
    bar: { groupWidth: "50%" }
  };

  constructor(private _activatedRoute: ActivatedRoute, private route: Router, private schoolDetailService: SchoolDetailService) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.getSchool(this.id);
  }

  async getSchool(id: Number) {
    await this.schoolDetailService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
    });

  }

}


