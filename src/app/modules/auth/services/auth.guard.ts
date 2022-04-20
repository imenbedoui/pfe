import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Observable , of  } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  [x: string]: any;
  constructor(private authService: AuthService , private router: Router) {}

  canActivate(_next:any, _state:any): Observable<boolean>{
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
     
      return of (true);
    }

    
    this.authService.logout();
    return of  (false);
 
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied')
          return this.router.navigate(['/login']);
        }
    })
)


  }
}
