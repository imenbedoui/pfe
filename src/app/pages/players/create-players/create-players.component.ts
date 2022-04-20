import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/modules/auth/services/players.service';

@Component({
  selector: 'app-create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.scss']
})
export class CreatePlayersComponent implements OnInit {
  createPlayers: FormGroup;
  submitted = false;

  constructor(private fb : FormBuilder,
              private _playersService: PlayersService,
              private router: Router) {
    this.createPlayers= this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  savePlayers(){
    this.submitted=true;

    if (this.createPlayers.invalid){
      return;
    }

    const players: any ={
      name: this.createPlayers.value.name,
      status: this.createPlayers.value.status,
    }
    this._playersService.savePlayers(players).then(() =>{
      console.log('Player added!');
      this.router.navigate(['/players'])
    }).catch(error => {
      console.log(error);
    })
  }
}
