import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class LoginPageComponent {

  login:Login = {email:"",password:""}


  onSubmit({ form }: NgForm) {
    console.log(form.value);
    console.log(form.valid);
  }
  
  resetForm(form: NgForm) {
    form.resetForm({ email: '', password: '' });
    // form.resetForm();
  }
}
