import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';

// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { AngularFireModule } from '@angular/fire/compat';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
//import { CreatePlayersComponent } from './pages/players/create-players/create-players.component';

//import * as Module from 'module';
// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

 


/*const firebaseConfig = {
  apiKey: "AIzaSyC3PHmIW69Cmu9loj3KWMmXiCFXPbQ80X4",
  authDomain: "pfe-v1-23182.firebaseapp.com",
  projectId: "pfe-v1-23182",
  storageBucket: "pfe-v1-23182.appspot.com",
  messagingSenderId: "393567351843",
  appId: "1:393567351843:web:a9cd150c9373cb272aad96",
  measurementId: "G-5TK7DHTK3T"
}*/

@NgModule({
  declarations: [AppComponent, SuperSecretComponent, CreateTeamComponent, EditTeamComponent,],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    // LoginComponent,
    // MaterialModule,
    // AccountComponent,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

