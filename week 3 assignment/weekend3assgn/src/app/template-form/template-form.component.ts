import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signIn(logIn: any) {
    console.log(logIn);
  }
  flag: any;
  onSubmit(email: any, fname: any, lname: any, pwd: any) {
    this.emailStatus = this.isValidEmail(email);
    this.fnameStatus = this.isValidFname(fname);
    this.lnameStatus = this.isValidLname(lname);
    this.pwdStatus = this.isValidPwd(pwd);
    this.flag = true;
    console.log(
      this.emailStatus,
      this.fnameStatus,
      this.lnameStatus,
      this.pwdStatus
    );
  }
  emailStatus: boolean = false;
  fnameStatus: boolean = false;
  lnameStatus: boolean = false;
  pwdStatus: boolean = false;

  isValidEmail(email: any) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  isValidFname(fname: any) {
    if (fname.length < 3 || fname.length > 7) return false;
    else return true;
  }
  isValidLname(lname: any) {
    if (lname.length < 5 || lname.length > 8) return false;
    else return true;
  }
  isValidPwd(pwd: any) {
    if (pwd.length < 5 || pwd.length > 15) return false;
    else return true;
  }
}