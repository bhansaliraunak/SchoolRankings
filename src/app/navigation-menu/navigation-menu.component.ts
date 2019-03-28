import { Component, OnInit, NgModule } from '@angular/core';
import { AngularStickyThingsModule } from '../directives/angular-sticky-things.module';

@NgModule({
  declarations: [

  ],
  imports: [
   AngularStickyThingsModule
  ]
})

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {


  navMenu: any;

  constructor() {
    this.navMenu = { 'home': 'Home', 'login':'Login'};

    }

    ngOnInit() {
    }
}
