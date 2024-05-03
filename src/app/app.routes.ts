import { Routes } from '@angular/router';

import {HomeViewComponent} from "./public/pages/home-view/home-view.component";
import {UsersLoginComponent} from "./2squareD/components/users-login/users-login.component";
import {UsersSignInComponent} from "./2squareD/components/users-sign-in/users-sign-in.component";
import {MathGamesViewComponent} from "./2squareD/pages/math-games-view/math-games-view.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {UsersConfigurationComponent} from "./2squareD/components/users-configuration/users-configuration.component";
import {PlansViewComponent} from "./2squareD/components/plans-view/plans-view.component";
export const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: UsersLoginComponent},
  { path: 'sign-in', component: UsersSignInComponent},
  { path: 'games', component: MathGamesViewComponent},
  {path: 'configuration', component: UsersConfigurationComponent},
  {path: 'plans', component: PlansViewComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
