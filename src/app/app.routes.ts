import { Routes } from '@angular/router';

// @ts-ignore
import {UserProgressViewComponent} from "./2squareD/pages/user-progress-view/user-progress-view.component";
// @ts-ignore
import {HomeViewComponent} from "./public/pages/home-view/home-view.component";
// @ts-ignore
import {UsersLoginComponent} from "./2squareD/components/users-login/users-login.component";
import {UsersSignInComponent} from "./2squareD/components/users-sign-in/users-sign-in.component";
// @ts-ignore


import {MathGamesViewComponent} from "./2squareD/pages/math-games-view/math-games-view.component";
// @ts-ignore
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
// @ts-ignore
import {UsersConfigurationComponent} from "./2squareD/components/users-configuration/users-configuration.component";
import {GameScreenComponent} from "./2squareD/components/game-screen/game-screen.component";
import {PlansViewComponent} from "./2squareD/components/plans-view/plans-view.component";
import {GameOverviewComponent} from "./2squareD/components/game-overview/game-overview.component";


export const routes: Routes = [
  { path: 'home/:id/:role', component: HomeViewComponent },
  { path: 'login', component: UsersLoginComponent},
  { path: 'sign-in', component: UsersSignInComponent},
  { path: 'my-progress/:role', component: UserProgressViewComponent},
  { path: 'games/:id', component: MathGamesViewComponent},
  { path: 'configuration/:id', component: UsersConfigurationComponent},
  { path: 'game/screen/:id',component: GameScreenComponent},
  { path: 'plans/:id', component: PlansViewComponent},
  { path: 'game/overview/:id', component: GameOverviewComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '1', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
