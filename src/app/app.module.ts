import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnswersComponent } from './answers/answers.component';

const appRoutes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    QuestionsComponent,
    PageNotFoundComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
