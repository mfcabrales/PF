import {Component, OnInit} from '@angular/core';
import {Competitor} from "../../commons/Competitor";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../../commons/AppState";
import * as CompetitorActions from '../../reducers/competitors.actions';
import {Fees} from "../../commons/Fees";


@Component({
    selector: 'competitors',
    templateUrl: './competitors.component.html',
    styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {

    competitorsNgrx: Observable<Competitor[]>;
    fees: Observable<Fees>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        // this.competitorsNgrx = this.store.select(state => state.competitors);
        this.competitorsNgrx = this.store.select('competitors');
        this.fees = this.store.select('fees');
        // this.fees.subscribe(result => {
        //     var algo = result._registrationFee;
        // });
        this.competitorsNgrx.subscribe(result => {

            result.sort((a, b) => {
                if (a._name < b._name) return -1;
                else if (a._name > b._name) return 1;
                else return 0;
            });

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
        this.store.dispatch(new CompetitorActions.Add(new Competitor()));
    }

    calculateData(user: Competitor) {
        //forkJoin( para multiples subscribes de obserbables
        this.fees.subscribe(fe => {
            user._ows = (user._yellow * fe._yellowFee) +
                (user._red * fe._redFee) +
                (user._w * fe._wFee) +
                fe._registrationFee;
            user._paid = (user._paidYellow * fe._yellowFee) +
                (user._paidRed * fe._redFee) +
                (user._paidW * fe._wFee) +
                (user._registration ? fe._registrationFee : 0);
            user._ows = user._ows - user._paid;
        });
    }
}