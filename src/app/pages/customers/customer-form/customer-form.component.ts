import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../../interfaces/customer';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styles: []
})
export class CustomerFormComponent {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() customer: Customer = {
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
    notes: '',
  };

  @Input() btnText: string = 'submit';

  onSubmit({ valid, value }: NgForm) {
    if (valid) this.submit.emit(value);
    return;
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
      notes: '',
    });
    this.reset.emit();
  }
}
