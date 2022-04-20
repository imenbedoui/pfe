import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountComponent } from "./account/account.component";
import { BuilderComponent } from "./builder/builder.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';


@NgModule ({
    declarations: [
        AccountComponent,
        BuilderComponent,
        DashboardComponent,
        TeamComponent,
        PlayersComponent,
        FormsModule,
        ReactiveFormsModule,
       // MatInputModule
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AccountComponent,
        BuilderComponent,
        DashboardComponent,
        PlayersComponent
    ]
})
export class PagesModule {}