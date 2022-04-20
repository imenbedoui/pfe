import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';

import { CreatePlayersComponent } from './create-players/create-players.component';


@NgModule({
  declarations: [PlayersComponent, CreatePlayersComponent ],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlayersComponent,
      },
    ]),
  ],
})
export class PlayersModule {}