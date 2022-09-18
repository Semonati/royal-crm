import { Component, OnDestroy, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controller';
import { Category } from 'src/app/components/search-bar/category';
import { Contact } from '../../../interfaces/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [],
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactRowData: Array<Contact> = [];
  contacts: Array<Contact> = [];
  categories: Array<Category> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Age', value: 'age' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
  ];
  controllers: Array<Controller> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
  ];
  display: string = 'table';
  dataReceived: boolean = false;
  unsubscribeGetAll: Function = () => {};

  constructor(private CS: ContactsService) {}

  onSearch(array: Contact[]) {
    this.contacts = array;
  }

  deleteContact(array: Array<Contact>) {
    this.contactRowData = array;
    this.contacts = this.contactRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit() {
    this.CS.getAll((customers: Contact[], unsubscribeGetAll: Function) => {
      this.contactRowData = customers;
      this.contacts = this.contactRowData;
      this.dataReceived = true;
      this.unsubscribeGetAll = unsubscribeGetAll;      
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
}