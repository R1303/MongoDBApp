import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { LoginComponent } from './login/login.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppSpinnerComponent,
    LoginComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
