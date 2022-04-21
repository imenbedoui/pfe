import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/modules/auth/services/team.service';
import { Team } from './team.model';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class TeamComponent implements OnInit {

  listTeams: any[]=[];
  teams: never[];

  constructor(private teamService: TeamService , private _cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.getListTeams()
    
  }

  getListTeams() {
   this.teamService.getTeamList().subscribe((teams: any)=> {
     this.changeStatus()
      for (let team of teams) {
        this.listTeams.push(team)
        
        console.log(this.listTeams);
      }
      
    })

    
    
  }
  changeStatus(): void {

    setTimeout(() => {

      this._cdr.detectChanges()
      this._cdr.markForCheck()

    }, 500);
  }
  
}
