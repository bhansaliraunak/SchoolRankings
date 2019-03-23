import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
   },
   {
    path: 'contact',
    component: ContactComponent
   },
   {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'school/:id',
    component: SchoolDetailComponent
  },
  {
    path: 'search',
    component: DashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
