import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { AuthService } from 'src/app/modules/auth';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  users : any= [{ firstname: "", lastname: "", email:""}];
  domaine:string;
  user: any
  constructor(private auth: AuthService) { }

  

  ngOnInit(): void {
    // this.auth.getDomaine().then(async (res: { get: (arg0: string) => string; })=>{
    //   this.domaine=res?.get("DomaineId");
    //   this.auth.getUsers(this.domaine).subscribe (((res: any)=>{
    //     this.users=res;
    //   }));
    // })
    this.user = firebase.default.auth().currentUser
    console.log(this.user._delegate.displayName);
    
  }

  changeStatus(): void {

     setTimeout(() => {
    
     this._cdr.detectChanges()
     this._cdr.markForCheck()
    
     }, 500);
     }
    private _cdr: ChangeDetectorRef
    

}
