import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { SuccessComponent } from './Success/app.component.success';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4ParentComponent } from './assignment4-parent/assignment4-parent.component';
import { Assignment4oddComponent } from './assignment4odd/assignment4odd.component';
import { Assignment4evenComponent } from './assignment4even/assignment4even.component';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SuccessComponent,
    AssignmentTwoComponent,
    Assignment3Component,
    Assignment4ParentComponent,
    Assignment4oddComponent,
    Assignment4evenComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
