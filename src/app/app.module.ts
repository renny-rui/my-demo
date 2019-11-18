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
import {MatSliderModule} from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutComponent } from './layout/layout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormfieldComponent,
    NavigationComponent,
    LayoutComponent,

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
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatListModule,
    MatStepperModule,
    ParkingModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }
