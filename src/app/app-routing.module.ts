import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './parking/parking.component';

const appRoutes: Routs = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'parking',
    component: ParkingComponent,
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ParkingComponent
  ]
})
export class AppRoutingModule { }
