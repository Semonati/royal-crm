import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spinner-loader',
  template: `
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  `,
  styleUrls: ['./spinner-loader.component.css']
})
export class SpinnerLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
