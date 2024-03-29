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
  setDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Customer } from '../../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
  );
  db = Firestore;



  constructor(private FS: Firestore, private router: Router) { }

  getAll(cb: Function) {
    let customers: any = [];

    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id: customer.id,
        });
      });
    });
    return cb(customers, unsubscribeGetAll);
  }

  add(customer: Customer, cb: Function) {
    customer.createdAt = serverTimestamp();
    addDoc(this.collectionRef, customer)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'customers', id);
      const result = await getDoc(docRef);
      const customer = { ...result.data(), _id: result.id };
      cb(customer);
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'customers', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(customer: Customer, id: string, cb: Function) {
    const docRef = doc(this.FS, 'customers', id);
    updateDoc(docRef, { ...customer })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
}
