import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let loggedIn :boolean= Math.random()<0.5;
    if(!loggedIn){
        console.log("用户未登录");
    }
    console.log(route.params);
    console.log(state.root);
    return loggedIn;
}

}
