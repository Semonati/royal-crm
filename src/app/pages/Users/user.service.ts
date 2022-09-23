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
import { Login } from 'src/app/interfaces/login';
import { Signup } from 'src/app/interfaces/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  signupWithEmailAndPassword(user: Signup, cb: Function) {
    const { email, password } = user;
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
        cb(credentials, email);
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
    this.toLocalStorage(email,true);
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
  
  loggedWithGoogle() {
    const user = this.auth.currentUser?.displayName?.charAt(0);
    return user;
  }
  
  loggedWithEmailAndPassword() {
    return localStorage.getItem("user");
  }
  toLocalStorage(userEmail:any,value:boolean){
    if(!value) return localStorage.removeItem("user");
    return localStorage.setItem("user", userEmail.charAt(0))
  }
}
