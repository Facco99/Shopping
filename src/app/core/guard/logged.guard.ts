import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {
  constructor(private router:Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {

    if (sessionStorage.getItem("utente") == null) {
      return true;
    } else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
  
}
