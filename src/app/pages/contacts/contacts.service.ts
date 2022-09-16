import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore'
import { Contact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );

  constructor(private FS: Firestore) { }

  getAll(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        contacts.push({
          ...contact.data(),
          _id: contact.id,
        });
      });
    });
    return cb(contacts, unsubscribeGetAll);
  }
  // getAll(): Contact[] {
  //   return this.contacts;
  // }

  add(contact: Contact, cb: Function) {
    contact.createdAt = serverTimestamp();
    addDoc(this.collectionRef, contact)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  // add(contact: Contact) {
  //   contact._id = String(this.contacts.length + 1) + new Date() + Math.random();
  //   contact.createdAt = new Date();
  //   this.contacts.push(contact);
  //   return;
  // }

  delete(id: string) {
    const docRef = doc(this.FS, 'contacts', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }
  
  // delete(id: string) {
  //   let contactIndex = this.contacts.findIndex(
  //     (contact: Contact) => contact._id === id
  //   );
  //   if (contactIndex === -1) return;
  //   this.contacts.splice(contactIndex, 1);
  // }

  async getContact(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'contacts', id);
      const result = await getDoc(docRef);
      const contact = { ...result.data(), _id: result.id };
      cb(contact);
    } catch (error) {
      console.log(error);
    }
  }

  // getContact(id: string, func: Function): Contact | void {
  //   const contact = this.contacts.find(
  //     (contact: Contact) => {
  //       contact._id === id
  //     }
  //   );

  //   return func(contact)
  // }

  edit(contact: Contact, id: string, cb: Function) {
    const docRef = doc(this.FS, 'contacts', id);
    updateDoc(docRef, { ...contact })
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  // edit(contact: Contact) {
  //   const index = this.contacts.findIndex(
  //     (contactDB) => contactDB._id === contact._id
  //   );
  //   if (index === -1) return;
  //   this.contacts[index] = contact;
  // }
}

/*
private contacts: Contact[] = [
    {
      _id: '152',
      firstName: 'User',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      phone: '050-1231231',
      birthday: new Date(),
      age: 22,
      address: {
        country: 'Israel',
        city: 'Tel Aviv-Yafo',
        street: 'Yehuda Halevi',
        houseNumber: 12,
        zip: 123456,
      },
      createdAt: new Date(),
    },
    {
      _id: '586',
      firstName: 'Angular',
      lastName: 'Admin',
      email: 'angular@gmail.com',
      birthday: new Date(),
      phone: '050-0000000',
      age: 28,
      address: {
        country: 'Israel',
        city: 'Tel Aviv-Yafo',
        street: 'Halenbi',
        houseNumber: 25,
        zip: 123123,
      },
      createdAt: new Date(),
    },
  ];
*/