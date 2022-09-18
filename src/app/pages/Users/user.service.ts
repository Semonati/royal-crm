import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { Signup } from 'src/app/interfaces/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private router: Router) { }

  signupWithEmailAndPassword(user: Signup, cb: Function) {
    const { email, password } = user;
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
        cb(credentials);
      })
      .catch(() => cb(null));
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        console.log('User logged out!');
      })
      .catch((error) => console.log(error));
  }

  loginWithEmailAndPassword(user: Login, cb: Function) {
    const { email, password } = user;
    signInWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
        cb(credentials);
      })
      .catch(() => cb(null));
  }

  signupAndLoginWithGoogle(cb: Function) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((data) => {
        cb(data);
      })
      .catch(() => { })
  }

  getUserStauts(cb: Function) {
    return onAuthStateChanged(this.auth, (user) => cb(user))
  }

}
