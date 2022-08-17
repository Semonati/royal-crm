import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  date:string = new Date().toLocaleDateString()
  constructor() {}

  ngOnInit(): void {}
}
