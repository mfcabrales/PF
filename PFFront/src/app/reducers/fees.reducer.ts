import {Fees} from "../commons/Fees";

const defaultState : Fees = {
    _registrationFee: 5000,
    _yellowFee: 1000,
    _redFee: 2000,
    _wFee: 1000
};

export function FeesReducer(){
    return defaultState;
}
