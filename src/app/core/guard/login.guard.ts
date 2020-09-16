import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router, UrlSegment, CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initUser } from 'src/app/redux/user/user.action';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private router: Router, private store: Store) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("utente") != null) {
      this.store.dispatch(initUser({user: JSON.parse(sessionStorage.getItem("utente"))}));
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
