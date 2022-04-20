import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../modules/auth/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  public editForm: FormGroup;
  teamRef: any;
   
  constructor(
    public teamService: TeamService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.formBuilder.group({
      name:[''],
      logo:[''],
      geography:[''],
      major_color:[''],
      capitain:[''],
      score:[''],
      league:[''],
      ranking:[''],
      warning:[''],
      status:[''],
      members:[''],

    })
   }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.teamService.getTeamDoc('id').subscribe(res => {
      this.teamRef =res;
      this.editForm = this.formBuilder.group({
        name: [this.teamRef.name],
        logo: [this.teamRef.logo],
        geography: [this.teamRef.geography],
        major_color:[this.teamRef.major_color],
        capitain:[this.teamRef.capitain],
        score:[this.teamRef.score],
        league:[this.teamRef.league],
        ranking:[this.teamRef.ranking],
        status:[this.teamRef.status],
        members:[this.teamRef.members],
      })
    })
  }

  onSubmit(){
    const id=this.act.snapshot.paramMap.get('id');
    this.teamService.updateTeam(this.editForm.value, 'id');
    this.router.navigate(['list-team']);
  };
 
}
