import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, AbstractControl} from '@angular/forms';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent implements OnInit {
  tags = ['JavaScript', 'Material Design', 'Angular Material'];
  surveyGroup: FormGroup;
  progress = 100;

  get selectedColorRed(): AbstractControl {
    return this.surveyGroup.get('favoriteColorRed');
  }

  get selectedColorGreen(): AbstractControl {
    return this.surveyGroup.get('favoriteColorGreen');
  }

  get selectedColorBlue(): AbstractControl {
    return this.surveyGroup.get('favoriteColorBlue');
  }

  get selectedColorStyle() {
    return `rgb(${this.selectedColorRed.value},${this.selectedColorGreen.value},${this.selectedColorBlue.value})`;
  }

  constructor(public dialog: MatDialog) {
    this.surveyGroup = new FormGroup({
      favoriteColorRed: new FormControl(0),
      favoriteColorGreen: new FormControl(0),
      favoriteColorBlue: new FormControl(0)
    });
  }

  removeTag(tagName) {
    this.tags = this.tags.filter(tag => tag !== tagName);
  }

  ngOnInit() {
  }

}
