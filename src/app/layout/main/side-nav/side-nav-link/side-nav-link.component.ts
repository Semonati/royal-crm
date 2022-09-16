import { Component, Input } from '@angular/core';
import { Links } from 'src/app/interfaces/links';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styles: [
    `
      .active {
        background: #000;
      }
    `,
  ],
})
export class SideNavLinkComponent {
  @Input() link: Links = { text: "", icon: '', link: '' };
}
