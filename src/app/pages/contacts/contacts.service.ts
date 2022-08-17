import { Injectable } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      _id: '152',
      firstName: 'User',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      birthday: new Date('August 3,1994'),
      phone: '050-1231231',
      age: 22,
      address: {
        country: 'Israel',
        city: 'Tel Aviv-Yafo',
        street: 'Yehuda Halevi',
        houseNumber: 12,
        zip: 123456,
      },
    },
    {
      _id: '586',
      firstName: 'Angular',
      lastName: 'Admin',
      email: 'angular@gmail.com',
      birthday: new Date('August 12,2000'),
      phone: '050-0000000',
      age: 22,
      address: {
        country: 'Israel',
        city: 'Tel Aviv-Yafo',
        street: 'Halenbi',
        houseNumber: 25,
        zip: 123123,
      },
    },
  ];
  constructor() {}

  getAll(): Contact[] {
    return this.contacts;
  }

  add(contact: Contact) {
    contact._id = String(this.contacts.length + 1) + new Date() + Math.random();
    return this.contacts.push({ ...contact, birthday: new Date() });
  }

  delete(id: string) {
    let contactIndex = this.contacts.findIndex(
      (contact: Contact) => contact._id === id
    );
    if (contactIndex === -1) return;
    this.contacts.splice(contactIndex, 1);
  }

  getContact(id: string,func:Function): Contact | void {
    const contact = this.contacts.find(
      (contact: Contact) => contact._id === id
    );
    return func(contact)
    // if (!contact) return;
    // return contact;
    // return this.contacts.find((contact: Contact) => contact._id === id);
  }

  edit(contact: Contact) {
    const index = this.contacts.findIndex(
      (contactDB) => contactDB._id === contact._id
    );
    if (index === -1) return;
    this.contacts[index] = contact;
  }
}
