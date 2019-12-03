import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CityLoginComponent } from './login/city-login/city-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HomeComponent } from './session/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './session/header/header.component';
import { TileComponent } from './session/tile/tile.component';
import { ProblemsComponent } from './session/problems/problems.component';
import { SessionComponent } from './session/session.component';
import { CityStatusComponent } from './session/city-status/city-status.component';
import { NewProblemsComponent } from './session/problems/new-problems/new-problems.component';
import { AgmCoreModule } from '@agm/core';
import { ProblemHandlerComponent } from './session/problems/problem-handler/problem-handler.component';
import { AssignedProblemsComponent } from './session/problems/assigned-problems/assigned-problems.component';
import { SolvedProblemsComponent } from './session/problems/solved-problems/solved-problems.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityLoginComponent,
    UserLoginComponent,
    HomeComponent,
    HeaderComponent,
    TileComponent,
    ProblemsComponent,
    SessionComponent,
    CityStatusComponent,
    NewProblemsComponent,
    ProblemHandlerComponent,
    AssignedProblemsComponent,
    SolvedProblemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzl6clsGSVwMGAYJzlRuG-EXvgtJlES_Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
