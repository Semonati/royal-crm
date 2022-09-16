import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../pages/Users/user.service';

@Injectable({
   providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
   isLogged: boolean = true;

   constructor(private US: UserService, private router: Router) { }

   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {
      this.US.getUserStauts((user: any) => {
         if (user) {
            this.isLogged = false;
            return;
         }
         return this.router.navigate(['/customers'])
      })
      return this.isLogged;
   }

}
