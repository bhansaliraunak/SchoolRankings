import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PagerService } from '../services/pager.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PagerService]
})
export class DashboardComponent implements OnInit {


  constructor(private http: HttpClient, private pagerService: PagerService) { }

    // array of all items to be paged
    private allItems = new Array();

    data =[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    page=1;

    ngOnInit() {
        this.getData(this.page);
    }

    getData(page: number){
      this.http.get('http://localhost:8000/api/v1/schools?page= '+this.page)
            .pipe(map((response: any) => response))
            .subscribe((data: any) => {

              console.log('Data: ',data);
                // set items to json response
                if(data.length>0){
                  for(let i=0; i<data.length; i++){
                    this.allItems.push(data[i]);
                } 
              

                    this.setPage(1);
                    this.getData(this.page++);
                }
              
                 
            
                               
            });
    }

    setPage(page: number) {
        // get pager object from service
        console.log(this.allItems);
        this.pager = this.pagerService.getPager(this.allItems.length, page);
      
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex+1);
    }

  }
