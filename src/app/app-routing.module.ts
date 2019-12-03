import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './session/home/home.component';
import { ProblemsComponent } from './session/problems/problems.component';
import { SessionComponent } from './session/session.component';
import { CityStatusComponent } from './session/city-status/city-status.component';
import { NewProblemsComponent } from './session/problems/new-problems/new-problems.component';
import { ProblemHandlerComponent } from './session/problems/problem-handler/problem-handler.component';
import { AssignedProblemsComponent } from './session/problems/assigned-problems/assigned-problems.component';
import { SolvedProblemsComponent } from './session/problems/solved-problems/solved-problems.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'session',
    component: SessionComponent,
    children: [
      { path: 'home', component: HomeComponent, outlet: 'view' },
      {
        path: 'problems',
        component: ProblemsComponent,
        outlet: 'view',
        children: [
          {
            path: 'new_problems',
            component: NewProblemsComponent,
            outlet: 'working_area'
          },
          {
            path: 'assigned_problems',
            component: AssignedProblemsComponent,
            outlet: 'working_area'
          },
          {
            path: 'solved_problems',
            component: SolvedProblemsComponent,
            outlet: 'working_area'
          },
          {
            path: 'problem/:id',
            component: ProblemHandlerComponent,
            outlet: 'working_area'
          }
        ]
      },
      { path: 'city', component: CityStatusComponent, outlet: 'view' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
