import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';
export const TW_FORMATS = {
  parse : {
    dateInput : 'YYYY/MM/DD'
  },
  diaplay: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY/MM',
    dateAllyLabel: 'YYYY/MM/DD',
    monthYearAllyLabel: 'YYYY MMM'
  }
};

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  indeterminateSelectedPayFor: boolean;
  surveyForm: FormGroup;

  constructor() {
    this.surveyForm = new FormGroup({
    mainQuestions : new FormGroup({
      payForAll: new FormControl(false),
      payForBook: new FormControl(false),
      payForMusic: new FormControl(false),
      payForMovie: new FormControl(true)
    })
    });
  }

   ngOnInit() {
   this._setSelectAllState();
  }
   checkAllChange($event: MatCheckboxChange) {
     this.surveyForm
        .get('mainQuestions')
        .get('payForBook')
        .setValue($event.checked);
     this.surveyForm
        .get('mainQuestions')
        .get('payForMusic')
        .setValue($event.checked);
     this.surveyForm
        .get('mainQuestions')
        .get('payForMovie')
        .setValue($event.checked);
     this._setSelectAllState();
   }
   payForChange() {
     this._setSelectAllState();
   }
   private _setSelectAllState() {
     const payForBook = this.surveyForm.get('mainQuestions').get('payForBook').value;
     const payForMusic = this.surveyForm.get('mainQuestions').get('payForMusic').value;
     const payForMovie = this.surveyForm.get('mainQuestions').get('payForMoive').value;
     const count = (payForBook ? 1 : 0 ) + (payForMusic ? 1 : 0 ) + (payForMovie ? 1 : 0 );
     this.surveyForm.get('mainQuestions').get('payForAll').setValue(count === 3);
     this.indeterminateSelectedPayFor = count > 0 && count < 3;
   }
}
