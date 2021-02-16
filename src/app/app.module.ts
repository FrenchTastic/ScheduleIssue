import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
