import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {IndexComponent} from "./components/index/index.component";
import {CompetitorsComponent} from "./components/competitors/competitors.component";
import {CompetitorReducer} from "./reducers/competitors.reducer";


const appRoutes: Routes = [
    {
        path: 'competitors',
        component: CompetitorsComponent
    },{
        path: 'index',
        component: IndexComponent
    },
    {
        path: '**',
        redirectTo: '/index',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true, useHash: true}),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({competitors: CompetitorReducer})
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        CompetitorsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}