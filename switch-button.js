class SwitchButton {
    _status;
    _target;

    constructor() {
        this._status = false;
    }

    connectToLamp(lamp){
        this._target = lamp;
    }

    switchOn(){
        this._target.lightOn();
    }

    switchOff(){
        this._target.lightOff();
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
    }
}