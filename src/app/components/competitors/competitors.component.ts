import {Component, OnInit} from '@angular/core';
import {Competitor} from "../../commons/Competitor";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../../commons/AppState";
import * as CompetitorActions from '../../reducers/competitors.actions';


@Component({
    selector: 'competitors',
    templateUrl: './competitors.component.html',
    styleUrls: ['./competitors.component.scss']
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
                let preCharge: Competitor[];
                preCharge = [
                    {
                        _name: 'MANUEL',
                        _yellow: 0
                    }
                ];
                this.store.dispatch(new CompetitorActions.AddAll(preCharge))
            }
            else
            {
                result.sort((a, b) => {
                    if (a._name < b._name) return -1;
                    else if (a._name > b._name) return 1;
                    else return 0;
                });
            }
        });
    }

    orderCompetitors() {
        this.competitorsNgrx.subscribe(result => {
            result.sort((a, b) => {
                if (a._name < b._name) return -1;
                else if (a._name > b._name) return 1;
                else return 0;
            });
        });
    }

    addCompetitor() {
        this.store.dispatch(new CompetitorActions.Add(<Competitor> {_name: ''}));
    }
}