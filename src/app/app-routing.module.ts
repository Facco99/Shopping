import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard } from './core/guard/logged.guard';
import { LoginGuard } from './core/guard/login.guard';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuard] }, 
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canLoad: [LoggedGuard] },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule), canLoad: [LoggedGuard] },
  { path: 'personalizza', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule), canLoad: [LoginGuard] },
  { path: 'carrello', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
