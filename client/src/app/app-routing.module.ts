import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { InDashboardComponent } from './in-dashboard/in-dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'index1',
    component:DashboardComponent
  },
  {
    path:'InsuranceForm',
    component:InsuranceFormComponent
  },
  {
    path:'index',
    component:Dashboard2Component
  },
  {
    path:'in',
    component:InDashboardComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
