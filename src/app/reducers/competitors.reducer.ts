import * as CompetitorActions from './competitors.actions';
import {Competitor} from "../commons/Competitor";


export type Action = CompetitorActions.All;

const defaultState: Competitor[] = [];

// const newState = (state: Competitor[], newData: any) => {
//     return Object.assign({}, state, newData);
// }

export function CompetitorReducer(state: Competitor[] = defaultState, action: Action){
    switch (action.type) {
        case CompetitorActions.ADD_ALL:
            let array = state;
            array = array.concat(action.payload);
            return array;
        case CompetitorActions.ADD:
            let array2 = state;
            array2.push(action.payload);
            return array2;
        default:
            return defaultState;
    }
}
