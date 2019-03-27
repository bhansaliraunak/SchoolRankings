import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from '../model/school';
import { SchoolService } from '../services/school.service';


export interface State {
  flag: string;
  name: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private schoolService: SchoolService) {
  }

  // Search Form
  public searchForm = new FormGroup({
    term: new FormControl()
  });

  @Output() searched = new EventEmitter<School[]>();

  ngOnInit() { }

  onSubmit() {
    console.warn(this.searchForm.value);
    if (this.searchForm.valid) {
      // retrieve the schools
      this.schoolService.searchSchools(this.searchForm.controls.term.value).subscribe(
        data => {
          console.log('data loaded, count' + data.length);
          this.searched.emit(data);
        },
        err => {
          // TODO handle error
        },
        () => {
          console.log('done');
        }
      );
    }
  }


}
