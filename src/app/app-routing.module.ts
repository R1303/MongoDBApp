import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { DeactivateServiceService } from './deactivate-service.service';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouteGuardService } from './route-guard.service';

const routes: Routes = [
  {path : "" , component : DetailPageComponent},
  {path : "detail" , component : DetailPageComponent},
  {path : 'admin' , component : MainComponent,canActivate:[RouteGuardService]},
  {path : 'sppiner' , component : AppSpinnerComponent},
  {path : 'login' , component : LoginComponent,canActivate:[DeactivateServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
