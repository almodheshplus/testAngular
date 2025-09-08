import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: "user/home",
    component: HomeComponent
  },
  {
    path: "user/about",
    component: AboutComponent
  },
  {
    path: "user/login",
    component: LoginComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "user/home"
  }
];
