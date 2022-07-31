import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts: Contact[] = [];
  constructor(CS: ContactsService) {
    this.contacts = CS.getAll();
  }
}