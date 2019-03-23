import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router'
import { SchoolDetailService } from '../services/school-detail.service';
import { SchoolData } from '../model/school';


export interface State {
  flag: string;
  name: string;
  city: string;
  state: string
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [SchoolDetailService]
})
export class SearchBarComponent implements OnInit {

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

  constructor(private router: Router, private schoolDetailService: SchoolDetailService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() { }

  async getNameValue() {
    await this.schoolDetailService.getSchoolByName(this.nameInput.nativeElement.value).subscribe((data) => {
        this.router.navigate(['/school', data[0]._id]); 
    });
   
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
