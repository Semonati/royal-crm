import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styles: [`
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color:purple;
    border-radius: 50%;
    }
    p{
      height:100%;
      width:45px;
      color:white;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight:bold;
    }
    `]
})
export class LoggedComponent {
  loggedWithEmailAndPassword: any = this.US.loggedWithEmailAndPassword();
  loggedWithGoogle: any = this.US.loggedWithGoogle();
  bgColor: string = this.getRandomColor()
  user:any = localStorage.getItem("user");

  constructor(private US: UserService) { }

  getFirstLetter() {
    if (!this.user) {
      return this.loggedWithGoogle;
    } else {
      return this.loggedWithEmailAndPassword.toUpperCase();
    }
  }
  logout() {
    this.US.logout();
    this.US.toLocalStorage("userFirstLetter",false)
  }

  getRandomColor(): any {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
}