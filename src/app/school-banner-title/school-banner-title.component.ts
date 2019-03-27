import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { School } from '../model/school';

@Component({
  selector: 'app-school-banner-title',
  templateUrl: './school-banner-title.component.html',
  styleUrls: ['./school-banner-title.component.scss']
})

export class SchoolBannerTitleComponent implements OnInit {

  school: School;
  assetsUrl;

  constructor(private sanitizer: DomSanitizer) {

    this.school = JSON.parse(localStorage.getItem('school'));

  }

  ngOnInit() {

    this.assetsUrl = this.sanitizer.bypassSecurityTrustStyle(`url(` + this.school.school_imageUrl_1600_456_jpg + `)`);

  }

}
