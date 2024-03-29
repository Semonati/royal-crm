import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'singin-page',
  templateUrl: './singin-page.component.html',
  styles: []
})
export class SinginPageComponent {
  error: boolean = false;

  constructor(private US: UserService, private router: Router) { }

  onSubmit(form: NgForm) {
    const { valid, value } = form;
    if (valid) {
      this.US.signupWithEmailAndPassword(value, (user: any,email:string): any => {
        if (user) {
          this.US.loggedWithGoogle()
          form.resetForm();
          this.error = false;
          return this.router.navigate(['/contacts']);
        }

        this.error = true;
        setTimeout(() => {
          form.resetForm();
          this.error = false;
          this.router.navigate(['']);
        }, 4000);
      });
    }
  }

  signinWithGoogle() {
    this.US.signupAndLoginWithGoogle((user: any): any => {      
      if (user) {
        return this.router.navigate(['/contacts']);
      }
    })
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
  
}
