import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  createdAt: any;
  contact: Contact | void = undefined;
  dataReceived: boolean = false;
  
  constructor(private AR:ActivatedRoute, private CS:ContactsService) { }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getContact(id!, (contact: Contact) => {
        this.contact = contact;
        this.createdAt = new Date(contact.createdAt?.seconds * 1000);
        this.dataReceived = true;
      });
    });
  }
}
