import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Team } from 'src/app/pages/team/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  firestore: any;
 
  
  constructor( private angularFirestore: AngularFirestore) { }

  getTeamDoc(id: string | undefined){
    return this.angularFirestore
    .collection('team-collection')
    .doc(id)
    .valueChanges()
  }
  
  getTeamList(){
    return this.angularFirestore.collection('team-collection').valueChanges({ id: 'propertyId' })
  }

  

  createTeam(team: Team){
    const team_id = this.angularFirestore.createId();
    team.id = team_id
    return new Promise<any>((resolve, reject)=>{
      this.angularFirestore
      .collection('team-collection')
      .doc(team_id)
      .set(team)
      .then(reponse => {console.log(reponse)}, error => reject(error));

    });
  }

  deleteTeam(team: { name?: string; id?: any; }){
    return this.angularFirestore
    .collection('Team-collection')
    .doc(team.id)
    .delete();
  }
  updateTeam(team: Team, id: string | undefined){
    return this.angularFirestore
    .collection ('team-collection')
    .doc(id)
    .update ({
      name: Team.name,
      logo: team.Logo,
      geography: team.Geography,
      major_color : team.Major_color,
      capitan: team.Capitain,
      score: team.Score,
      league: team.League,
      ranking: team.Ranking,
      warning: team.Warning,
      status: team.Status,
      members: team.Members

    })
  }

 
}

