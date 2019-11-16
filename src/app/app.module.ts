import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ParkingModule } from './parking/parking.module';
import { FormfieldComponent } from './formfield/formfield.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormfieldComponent,

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    ParkingModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }
