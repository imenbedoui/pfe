import { Component, OnInit } from '@angular/core';
import { TeamService } from '../modules/auth/services/team.service';
import { Team } from '../pages/team/team.model';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss']
})
export class ListTeamComponent implements OnInit {
   team: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    // this.teamService.getTeamList().subscribe(res =>{
    //   this.team= res.map(e =>{
    //     return{
    //       id : e.payload.doc.id,
    //       ...e.payload.doc.data() as {}
    //     } as Team;
    //   })
    // });

  }

  
removeTeam (Team: { name: string; }){
  if (confirm("Are you sure to delete"+ Team.name)){
    this.teamService.deleteTeam(Team);
  }
}
}