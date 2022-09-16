import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styles: [],
})
export class NewContactComponent {
  constructor(private CS: ContactsService, private router: Router) {}

  onSubmit(contact: Contact) {
    this.CS.add(contact, () => this.router.navigate(['/contacts']));
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
