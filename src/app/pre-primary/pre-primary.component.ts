import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrePrimaryService } from '../services/preprimary.service';
import { PrePrimaryModel, PrePrimary } from '../model/pre-primary';
import { School } from '../model/school';

@Component({
  selector: 'app-pre-primary',
  templateUrl: './pre-primary.component.html',
  styleUrls: ['./pre-primary.component.scss']
})

export class PrePrimaryComponent implements OnInit, AfterContentInit {

  prePrimaryAsync: PrePrimary;
  id: Number;
  school: School;
  prePrimaryLocal: PrePrimary;
  remSeats: number;

  public bar_ChartData = [];


  public bar_ChartOptions = {
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


  constructor(private _activatedRoute: ActivatedRoute,
    private prePrimaryService: PrePrimaryService) {

    this.school = JSON.parse(localStorage.getItem('school'));
   
    
  }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    this.getSchool(this.id);
    this.remSeats = this.prePrimaryLocal.pre_primary_school_seats_count - this.prePrimaryLocal.pre_primary_school_students_applied_count;
    console.log('REM SEATS: ', this.remSeats);
  }

  ngAfterContentInit(){

    this.prePrimaryLocal = JSON.parse(localStorage.getItem('preprimary'));
   
    this.bar_ChartData = [['Students', 'Seats'],
    ['Total Seats ('+ this.prePrimaryLocal.pre_primary_school_seats_count + ')', this.prePrimaryLocal.pre_primary_school_seats_count],
    ['Applied ('+ this.prePrimaryLocal.pre_primary_school_students_applied_count + ')', this.prePrimaryLocal.pre_primary_school_students_applied_count],
    ['Accepted ('+ this.prePrimaryLocal.pre_primary_school_students_accepted_count + ')', this.prePrimaryLocal.pre_primary_school_students_accepted_count]];
    
  }
   getSchool(id: Number) {

    this.prePrimaryService.getPrePrimarySchoolById(this.id).subscribe(data => {
      this.prePrimaryAsync = data;
     localStorage.setItem('preprimary',JSON.stringify(this.prePrimaryAsync));
    });
    
  }

}
