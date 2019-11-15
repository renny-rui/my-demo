import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from './parking.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    declarations: [
    ParkingComponent
],
    imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule
    ],
    exports: [
    ParkingComponent
    ]
})
export class ParkingModule {
}
