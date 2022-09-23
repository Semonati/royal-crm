import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../pages/Users/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false

  constructor(private US: UserService, private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      this.US.getUserStauts((user: any) => {
        if(user){
          this.isLogged = true;
          return;
        }
        return this.router.navigate([''])
      })
    return this.isLogged;
  }

}
