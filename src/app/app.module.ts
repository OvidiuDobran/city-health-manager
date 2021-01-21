import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CityLoginComponent } from './login/city-login/city-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HomeComponent } from './session/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './session/header/header.component';
import { TileComponent } from './session/tile/tile.component';
import { ProblemsComponent } from './session/problems/problems.component';
import { SessionComponent } from './session/session.component';
import { AgmCoreModule } from '@agm/core';
import { ProblemHandlerComponent } from './session/problems/problem-handler/problem-handler.component';
import { ProblemsListComponent } from './session/problems/problems-list/problems-list.component';
import { HistoryRecordComponent } from './session/problems/problem-handler/history-record/history-record.component';
import { CommentBoxComponent } from './session/problems/problem-handler/comment-box/comment-box.component';
import { RewardsComponent } from './session/rewards/rewards.component';
import { RewardDefinitionComponent } from './session/rewards/reward-definition/reward-definition.component';
import { RatingBarComponent } from './session/problems/rating-bar/rating-bar.component';
import { CitiesRankingComponent } from './session/cities-ranking/cities-ranking.component';
import { NewsComponent } from './session/news/news.component';
import { NewsArticleDefinitionComponent } from './session/news/news-article-definition/news-article-definition.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ChartsModule } from 'ng2-charts';

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
        ProblemHandlerComponent,
        ProblemsListComponent,
        HistoryRecordComponent,
        CommentBoxComponent,
        RewardsComponent,
        RewardDefinitionComponent,
        RatingBarComponent,
        CitiesRankingComponent,
        NewsComponent,
        NewsArticleDefinitionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDE7TNTJLCQo4Y_zzAN3cOFU1zdLlaNQ8A'
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
