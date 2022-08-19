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
    birthday: new Date().toLocaleString(),
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
    form.resetForm({
      firstName: '',
      lastName: '',
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
      birthday: new Date(),
    });
    this.reset.emit();
  }


  updateAge() {
    if (!this.contact.birthday) return;
    this.contact.age = this.getAge(new Date(this.contact.birthday));
  }

  getAge(birthDate: Date): number {
    let today = new Date();
    let diff = today.getTime() - birthDate.getTime();
    return Math.floor(diff / (1000 * 3600 * 24) / 365);
  }
}
