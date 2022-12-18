import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DeactivateServiceService implements CanActivate {

  constructor(private router:Router,private service:CommonService) { }
  path: ActivatedRouteSnapshot[];
  component: Object;
  route: ActivatedRouteSnapshot;

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    if (this.service.isUserLoggedIn()){
      this.router.navigate(['admin']);
      return false;
    }
    return true;
  };

  
}
