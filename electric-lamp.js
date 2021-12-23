class ElectricLamp{
    _status;

    constructor() {
        this._status = false;
    }

    lightOn(){
        this._status = true;
        document.write('Turn on.<br>');
    }

    lightOff(){
        this._status = true;
        document.write('Turn off.<br>');
    }


    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

}