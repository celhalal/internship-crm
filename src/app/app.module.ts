import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './Login';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  // route to error page
  // keep first path since we are not calling login-form in app html
  {
    path: '',
    component: LoginFormComponent
  },
  // http://localhost:4200/error to access
  {
    path: 'error',
    component: ErrorComponent
  },
  //http://localhost:4200/detail to access
  {
    path: 'detail',
    component: DetailComponent
  }, {
    path: 'index',
    component: IndexComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DetailComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
