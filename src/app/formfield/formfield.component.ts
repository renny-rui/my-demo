import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {coerceNumberProperty} from '@angular/cdk/coercion';
export interface Animal {
  name: string;
  sound: string;
}
export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
  }
  set tickInterval(value){
    this._tickInterval = coerceNumberProperty(value);
  }
  // tslint:disable-next-line: variable-name
  private _tickInterval = 1;
}
@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {
  hide = true;
  favoriteSeason: string;
  seasons: string[] = ['Spring', 'Summer', 'Autumn', 'Winter'];
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    { name: 'Dog', sound: 'wangwang!' },
    { name: 'Cat', sound: 'miaomiao!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'wa-pa-pa-pow!' }
  ];
  constructor() {}

  ngOnInit() {}
}
