import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { CreatePlayersComponent } from './pages/players/create-players/create-players.component';
import { PlayersComponent } from './pages/players/players.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
//import { AccountComponent } from './pages/account/account.component';
//import { TeamComponent } from './pages/team/team.component';
export const routes: Routes = [

  {path:'', redirectTo:'/players',pathMatch:'full'},
  {path:'create-players', component:CreatePlayersComponent},
  //{path:'players', component: PlayersComponent},
  //{path: '**', redirectTo: 'players', component: PlayersComponent},
  {path:'edit-players/:id', component:CreatePlayersComponent},

  {path:'', redirectTo:'/create', pathMatch:'full'},
  {path:'create', component: CreateTeamComponent},
  {path:'list-team', component: ListTeamComponent},
  //{path:'update-team', component: EditTeamComponent},
  {path:'edit-teams/:id', component: CreateTeamComponent},
  
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'error/404' },

  { path: 'secret', component : SuperSecretComponent , canActivate: [AuthGuard]  },

  //{ path: 'account', loadChildren: ()=> import ('./modules/auth/models/user.model').then(m=> m.UserModel)}
  //{path: 'team', component : TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule {}
