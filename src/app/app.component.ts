import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  title = 'assignment6';
  defaultSubscription = 'Advanced';
  submitted = false;
  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.Subscription;
    this.user.password = this.signupForm.value.password;

  }

  user = {
    email: '',
    subscription: '',
    password: ''
  }


}
