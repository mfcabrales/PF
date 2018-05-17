import {Component, OnInit} from '@angular/core';
import {Competitor} from "../../commons/Competitor";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../../commons/AppState";
import * as CompetitorActions from '../../reducers/competitors.actions';


@Component({
    selector: 'competitors',
    templateUrl: './competitors.component.html'
})
export class CompetitorsComponent implements OnInit {

    competitorsNgrx: Observable<Competitor[]>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        // this.competitorsNgrx = this.store.select(state => state.competitors);
        this.competitorsNgrx = this.store.select('competitors');
        this.competitorsNgrx.subscribe(result => {
            if (result.length === 0) {
                let preCharge : Competitor[];
                preCharge = [
                    {
                        _name : 'name'
                    },
                    {
                        _name : 'Manuel Cabrales - Jaime Andres Carvajal'
                    }
                ];
                this.store.dispatch(new CompetitorActions.AddAll(preCharge))
            }
        });

    }

    addCompetitor() {
        this.store.dispatch(new CompetitorActions.Add(<Competitor> {_name: ''}));
    }
}