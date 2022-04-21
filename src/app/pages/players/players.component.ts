import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/modules/auth/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  items: Observable<any[]>;
  players: any[] = [];
  //id: any[] = [];
  
  
  //getPlayers: any;
  
  
  constructor(private _playersService: PlayersService, private _cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.getPlayers()
  
  }

 getPlayers(){
  //  this._playersService.getPlayers().subscribe(data => {
  //    this.players =[];
  //    data.forEach((element:any)=>{
  //      this.players.push({
  //        id: element.payload.doc.id,
  //        ...element.payload.doc.data()
  //      })
  //    })
  //  });
  //  console.log(this.players);

   this._playersService.getPlayer().subscribe((teams: any)=> {
    this.changeStatus()
     for (let team of teams) {
       this.players.push(team)
       
     }
     
   })
  //  console.log(this.players);
 }
 
 changeStatus(): void {

  setTimeout(() => {

    this._cdr.detectChanges()
    this._cdr.markForCheck()

  }, 500);
}


  deletePlayers(id: string ){
    this._playersService.deletePlayers(id).then(()=>{
      console.log('player deleted!');
    }).catch(error => {
      console.log(error);
    })
  }

  }
  

