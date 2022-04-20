import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  

  constructor(private firestore: AngularFirestore) { }

  savePlayers(players: any):Promise<any> {
    return this.firestore.collection('players').add(players);
  }
  getPlayers(): Observable<any>{
    // return this.firestore.collection('players').snapshotChanges();
    return this.firestore.collection('players').valueChanges()
  }
}
