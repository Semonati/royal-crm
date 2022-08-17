import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() contact: Contact = {
    firstName: '',
    lastName: '',
    birthday: new Date(),
    age:0,
    email: '',
    phone: '',
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
      zip: 0,
    },
  };

  onSubmit({ valid, value }: NgForm) {
    if (valid) this.submit.emit(value);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
