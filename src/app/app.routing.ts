

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: GameComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
