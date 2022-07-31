import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styles: [
    `
      li {
        list-style-type: none;
      }
      .top-nav-active {
        font-weight: bold;
        background: gray;
      }
    `,
  ],
})
export class SideNavLinkComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
}
