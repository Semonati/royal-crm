import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'contacts-card',
  templateUrl: './contacts-card.component.html',
  styles: [
  ]
})
export class ContactsCardComponent {
  @Input() contacts: Array<Contact> = [];
}
