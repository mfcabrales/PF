export class Competitor {
    _name: string;
    _yellow: number;
    _paidYellow: number;
    _red: number;
    _paidRed: number;
    _w: number;
    _paidW: number;
    _registration: boolean;
    _ows: number;
    _paid: number;

    constructor (){
        this._name = '';
        this._yellow = 0;
        this._paidYellow = 0;
        this._red = 0;
        this._paidRed = 0;
        this._w = 0;
        this._paidW = 0;
        this._registration = false;
        this._ows = 0;
        this._paid = 0;
    }
}