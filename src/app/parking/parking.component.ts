import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
  
export class ParkingComponent implements OnInit {
  form: FormGroup;
  questions = [
    {
      key: 'asdasd',
      value:'asdasdasdasd'
    }
  ];
  constructor() {
    this.form = new FormGroup({
      datepick1: new FormControl(''),
      datepick2: new FormControl(''),
    });
  }
  ngOnInit() {
    
  }
}


