import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'questions', component: QuestionsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    QuestionsComponent
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
