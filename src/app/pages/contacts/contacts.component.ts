import { Component } from '@angular/core';
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
    e.stopPropagation();
    this.CS.delete(id);
    this.contacts = this.CS.getAll();
  }
}