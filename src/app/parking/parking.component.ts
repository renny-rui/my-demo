import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
// tslint:disable-next-line: no-empty-interface
export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] =>{
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})

export class ParkingComponent implements OnInit {
  form: FormGroup;
  questions = [
    {
      key: 'asbhdfc',
      value: 'asdasdasdasd'
    }
  ];
  stateFrom: FormGroup =this._formBuilder.group({stateGroup: '', });
      stateGroups: StateGroup[] = [{
        letter: 'A',
        names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
      }, {
        letter: 'C',
        names: ['California', 'Colorado', 'Connecticut']
      }, {
        letter: 'D',
        names: ['Delaware']
      }, {
        letter: 'F',
        names: ['Florida']
      }, {
        letter: 'G',
        names: ['Georgia']
      }, {
        letter: 'H',
        names: ['Hawaii']
      }];
      StateGroupOptions:Observable<StateGroup[]>;
  constructor(private _formBuilder: FormBuilder) {
    this.form = new FormGroup({
      datepick1: new FormControl(''),
      datepick2: new FormControl(''),
    });
    }
  ngOnInit() {
    this.StateGroupOptions = this.stateFrom.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
    }
  }





