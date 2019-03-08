import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component';
import { MainwebComponent } from './mainweb/mainweb.component';
import { RouterService } from './router.service';


const routes: Routes = [
  {path:'',redirectTo:'/mainweb',pathMatch:'full'},
  {path:'router',component:RouterComponent,canActivate: [RouterService]},
  {path:'mainweb',component:MainwebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
