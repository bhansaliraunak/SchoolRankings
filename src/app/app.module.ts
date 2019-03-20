import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { StickyThingDirective} from './directives/sticky-thing.directive';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SchoolDetailComponent,
    GrdFilterPipe,
    StickyThingDirective,
    GoogleChartComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatTabsModule,
    MatDividerModule,
    MatBadgeModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
