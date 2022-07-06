import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { SidebarModule } from 'ng-sidebar';

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

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';


const appRoutes: Routes = [
  // route to error page
  // keep first path since we are not calling login-form in app html
  { path: '', component: LoginFormComponent, },
  // http://localhost:4200/error to access
  { path: 'error', component: ErrorComponent },
  //http://localhost:4200/index to access
  { path: 'index', component: IndexComponent },
  // http://localhost:4200/register to access
  { path: 'register',
    component: RegisterComponent },
  { path: 'new-password', component: NewPasswordComponent }
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
    NewPasswordComponent,
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
    NgxPaginationModule,
    MatChipsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatBadgeModule,
    SidebarModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
