import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SchoolDetailService} from '../school-detail/school-detail.service';
import { SchoolData, School } from '../model/school';
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
  styleUrls: ['./search-bar.component.scss'],
  providers: [SchoolDetailService]
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private schoolDetailService: SchoolDetailService, private schoolService: SchoolService) {
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    );
  }

  @ViewChild('nameInput') nameInput: ElementRef;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  school: SchoolData[];

  states: State[] = [
    {
      name: 'Gurukul',
      city: 'Jodhpur',
      state: 'Rajasthan',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'DPS',
      city: 'Jodhpur',
      state: 'Rajasthan',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Euro',
      city: 'Pune',
      state: 'Maharashtra',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    }
  ];

  // Search Form
  public searchForm = new FormGroup({
    term: new FormControl()
  });

  @Output() searched = new EventEmitter<School[]>();

  ngOnInit() { }

  getNameValue() {
    if (this.nameInput.nativeElement.value) {
    console.log('Get Value:', this.nameInput.nativeElement.value);
    this.schoolDetailService.getSchoolByName(this.nameInput.nativeElement.value).subscribe((data) => this.school = data);
    }
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

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
