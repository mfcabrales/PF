import * as CompetitorActions from './competitors.actions';
import {Competitor} from "../commons/Competitor";


export type Action = CompetitorActions.All;

const defaultState: Competitor[] = [];

const newState = (state: Competitor[], newData: any) => {
    return Object.assign({}, state, newData);
}

export function CompetitorReducer(state: Competitor[] = defaultState, action: Action){
    switch (action.type) {
        case CompetitorActions.ADD_ALL:
            //return newState(state, state.concat(action.payload));
            let array = state;
            array = array.concat(action.payload);
            return array;
            // state = action.payload;
            // return state;
        case CompetitorActions.ADD:
            let array2 = state;
            array2.push(action.payload);
            return array2;
            // return newState(state, state.push(action.payload));
            // state.push(action.payload);
            // return state;
        default:
            return state;
    }
}

// export function CompetitorReducer(state: Competitor[] = [], action: any) {
//     switch (action.type) {
//         case 'ADD_ALL':
//             state = action.payload;
//             return state;
//         case 'ADD':
//             state.push(action.payload);
//             return state;
//         default:
//             return state;
//     }
// }