import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginStatus = false;
returnUrl: string;
tokenStatic: string;
remember: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl(true),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {this.remember = true; }

  ngOnInit() {
  }

}
