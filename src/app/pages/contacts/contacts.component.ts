import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles:[],
})
export class ContactsComponent {
  contacts: Contact[] = [];

  constructor(private CS: ContactsService) {
    this.contacts = CS.getAll();
  }

  deleteContact(e: MouseEvent,id:string) {
    e.stopImmediatePropagation();
    this.CS.delete(id);
  }
}