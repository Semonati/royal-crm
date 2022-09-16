import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'contacts-folder',
  templateUrl: './contacts-folder.component.html',
  styles: [
  ]
})
export class ContactsFolderComponent {
  @Input() contacts: Array<Contact> = [];
}
