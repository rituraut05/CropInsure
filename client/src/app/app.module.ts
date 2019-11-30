import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { ProgressBarStoryDemo } from './progress-bar-story/progress-bar-story.component';
import { ProgbarExampleComponent } from './progbar-example/progbar-example.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { InDashboardComponent } from './in-dashboard/in-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressBarStoryDemo,
    ProgbarExampleComponent,
    InsuranceFormComponent,
    Dashboard2Component,
    InDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
