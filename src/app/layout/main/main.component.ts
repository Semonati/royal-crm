import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .min-height-85 {
        min-height: 85vh;
      }
    `,
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
