import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path: '',canActivate:[!AuthGuard], component: SignInComponent },
  { path: 'sign-in',canActivate:[!AuthGuard], component: SignInComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
    { path: '', component: SignInComponent},
    { path: 'home', component: HomeComponent},

    ],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
