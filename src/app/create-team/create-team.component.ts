import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../modules/auth/services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  teamForm: FormGroup;

  constructor(
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
  }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
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
  onSubmit(){
    this.teamService.createTeam(this.teamForm.value);
    this.router.navigate(['list-team'])
  }
}
