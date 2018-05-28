import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CompetitorsComponent} from "./components/competitors/competitors.component";
import {CompetitorReducer} from "./reducers/competitors.reducer";
import {FeesReducer} from "./reducers/fees.reducer";


const appRoutes: Routes = [
    {
        path: 'competitors',
        component: CompetitorsComponent
    },
    {
        path: '**',
        redirectTo: '/competitors',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true, useHash: true}),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({
            competitors: CompetitorReducer,
            fees: FeesReducer})
    ],
    declarations: [
        AppComponent,
        CompetitorsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}