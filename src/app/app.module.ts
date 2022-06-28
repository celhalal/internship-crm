import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { NewPasswordComponent } from './new-password/new-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const appRoutes: Routes = [
  // route to error page
  // keep first path since we are not calling login-form in app html
  {
    path: '',
    component: LoginFormComponent,
  },
  // http://localhost:4200/error to access
  {
    path: 'error',
    component: ErrorComponent
  },
  //http://localhost:4200/index to access
  {
    path: 'index',
    component: IndexComponent
  },
  // http://localhost:4200/register to access
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    RegisterComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
