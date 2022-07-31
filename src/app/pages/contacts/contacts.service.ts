import { Injectable } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: '123456789',
      firstName: 'User',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      // birthday: new Date('August 3,1994'),
      birthday: new Date(2000, 1 - 1, 1).toLocaleDateString(),
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
      id: '555555555',
      firstName: 'Angular',
      lastName: 'Admin',
      email: 'angular@gmail.com',
      // birthday: new Date('August 12,2000'),
      birthday: new Date(2000, 1 - 1, 1).toLocaleDateString(),
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
  constructor() { }
  
  getAll(): Contact[]{
    return this.contacts;
  }
}
