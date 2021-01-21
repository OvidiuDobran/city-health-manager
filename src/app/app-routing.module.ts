import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './session/home/home.component';
import { ProblemsComponent } from './session/problems/problems.component';
import { SessionComponent } from './session/session.component';
import { ProblemHandlerComponent } from './session/problems/problem-handler/problem-handler.component';
import { RewardsComponent } from './session/rewards/rewards.component';
import { RewardDefinitionComponent } from './session/rewards/reward-definition/reward-definition.component';
import { CitiesRankingComponent } from './session/cities-ranking/cities-ranking.component';
import { NewsComponent } from './session/news/news.component';
import { NewsArticleDefinitionComponent } from './session/news/news-article-definition/news-article-definition.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
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
                        path: 'problem/:id',
                        component: ProblemHandlerComponent,
                        outlet: 'working_area'
                    }
                ]
            },
            { path: 'ranking', component: CitiesRankingComponent, outlet: 'view' },
            { path: 'rewards', component: RewardsComponent, outlet: 'view' },
            { path: 'new_reward', component: RewardDefinitionComponent, outlet: 'view' },
            { path: 'reward_update/:id', component: RewardDefinitionComponent, outlet: 'view' },
            { path: 'news', component: NewsComponent, outlet: 'view' },
            { path: 'new_article', component: NewsArticleDefinitionComponent, outlet: 'view' },
            { path: 'article_update/:id', component: NewsArticleDefinitionComponent, outlet: 'view' }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
