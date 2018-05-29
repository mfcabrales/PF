import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {Store} from "@ngrx/store";
import {AppState} from "./commons/AppState";
import {Competitor} from "./commons/Competitor";
import {Observable} from "rxjs/Observable";
import {Fees} from "./commons/Fees";
import {combineLatest} from "rxjs/observable/combineLatest";
import * as CompetitorActions from "./reducers/competitors.actions";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    competitors: Observable<Competitor[]>;
    fees: Observable<Fees>;


    constructor(private service: ApiService, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.competitors = this.store.select('competitors');
        this.fees = this.store.select('fees');
        this.competitors.subscribe(result => {
            if (result.length === 0) {
                this.service.getPF().subscribe(dataResult => {
                    this.store.dispatch(new CompetitorActions.AddAll(dataResult['competitors']));

                });
            }
        });
    }

    syncData() {
        combineLatest([this.competitors, this.fees]).subscribe(results => {
            let body = {
                fees: results[1],
                competitors: results[0]
            };
            this.service.postPF(JSON.stringify(body)).subscribe(data => {
                if (data !== 'Created') {
                    alert("ERROR");
                }
            });
        });
    }
}