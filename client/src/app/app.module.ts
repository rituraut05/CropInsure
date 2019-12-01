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
import { AnalyticsComponent } from './analytics/analytics.component';
import { ClrChartsComponent } from './clr-charts/clr-charts.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressBarStoryDemo,
    ProgbarExampleComponent,
    InsuranceFormComponent,
    Dashboard2Component,
    InDashboardComponent,
    AnalyticsComponent,
    ClrChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}