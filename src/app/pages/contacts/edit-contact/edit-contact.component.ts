import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styles: [],
})
export class EditContactComponent implements OnInit {
  contact: Contact | void = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;
  dataReceived: boolean = false;

  constructor(
    private AR: ActivatedRoute,
    private router: Router,
    private CS: ContactsService
  ) {}

  onSubmit(contact: Contact) {
    contact.createdAt = this.createdAt!;
    contact._id = this.id!;
    this.CS.edit(contact, contact._id, () =>
      this.router.navigate(['/contacts'])
    );
  }

  resetForm() {
    this.CS.getContact(this.id!, (contact: Contact) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getContact(id!, (contact: Contact) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
        this.dataReceived = true;
      });
    });
  }
}