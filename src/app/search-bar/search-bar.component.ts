import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router'
import {SchoolDetailService} from '../school-detail/school-detail.service';
import { SchoolData } from '../model/school';


export interface State {
  flag: string;
  name: string;
  population: string;
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
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
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

  ngOnInit() {
    this.getNameValue();
  }

  getNameValue(){
    if(this.nameInput.nativeElement.value){
    console.log('Get Value:', this.nameInput.nativeElement.value);
    this.schoolDetailService.getSchoolByName(this.nameInput.nativeElement.value).subscribe((data)=> this.school = data);
    }
  }


  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }




}
