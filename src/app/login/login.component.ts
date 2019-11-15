import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    remember: new FormControl(true)
  });
  loginForm: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.remember = true;
  }
  get username(): AbstractControl {
    return this.form.get('username');
  }
  get password(): AbstractControl {
    return this.form.get('password');
  }
  ngOnInit() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.form.get('username').setValue(localStorage.getItem('username'));
      this.form.get('password').setValue(localStorage.getItem('password'));
    }
  }
  submit() {
    this.loginStatus = true;
    if (this.form.valid) {
      if (
        this.username.value === 'zr' &&
        this.password.value === '123'
      ) {
        if (this.remember) {
          localStorage.setItem('username', this.form.get('username').value);
          localStorage.setItem(
            'password',
            unescape(this.form.get('password').value)
          );
        } else {
          localStorage.clear();
        }
        this.router.navigateByUrl('/parking');
      } else {
        alert('用户名或密码错误');
      }
    }
  }
}
