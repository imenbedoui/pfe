import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { promises } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  

  constructor(private firestore: AngularFirestore) { }

  savePlayers(players: any):Promise<any> {
    const player_id = this.firestore.createId();
    players.id = player_id
    return this.firestore.collection('players').doc(player_id).set(players);
  }
  getPlayer(): Observable<any>{
    // return this.firestore.collection('players').snapshotChanges();
    return this.firestore.collection('players').valueChanges()
  }

  deletePlayers(id: string): Promise<any>{
    return this.firestore.collection('player').doc(id).delete();
  }

  getPlayers (id: string){
    return this.firestore.collection('players').doc(id).snapshotChanges();
  }
}
