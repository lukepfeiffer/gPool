import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeNavComponent,
    FooterComponent,
    SignUpComponent,
    DashboardComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
