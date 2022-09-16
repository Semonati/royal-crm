import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

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
  user: any;
  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStauts((user: any) => (this.user = user));
  }
}
