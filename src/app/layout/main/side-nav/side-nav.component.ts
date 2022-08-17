import { Component } from '@angular/core';
import { Links } from 'src/app/interfaces/links';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: Links[] = [
    {
      link: 'contacts',
      text: 'contacts',
      icon: 'fa-solid fa-address-book',
    },
    {
      link: 'customers',
      text: 'customers',
      icon: 'fa-solid fa-users',
    },
  ];
}