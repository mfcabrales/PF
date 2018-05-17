import {Action} from "@ngrx/store";
import {Competitor} from "../commons/Competitor";


export const ADD_ALL = '[Competitor] Add All';
export const ADD = '[Competitor] Add';

export class AddAll implements Action
{
    readonly type = ADD_ALL;

    constructor(public payload: Competitor[]){
    }
}

export class Add implements Action
{
    readonly type = ADD;
    constructor(public payload: Competitor){
    }
}

export type All
= AddAll
| Add;