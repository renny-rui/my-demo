import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {
  hide = true;
  favoriteSeason: string;
  seasons: string[] = ['Spring',  'Summer', 'Autumn', 'Winter'];
  constructor() {}

  ngOnInit() {}
}
