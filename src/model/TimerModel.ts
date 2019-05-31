namespace model {
    export const C_EVT_UPDATE = "update";
    export class TimerModel extends egret.EventDispatcher {
        constructor() {
            super();
        }

        private _startTime: number;

        private _currentTime: number;

        private _timer: egret.Timer;

        start() {
            this._startTime = egret.getTimer();
            this._currentTime = this._startTime;
            this._timer = new egret.Timer(1000, 0);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
            this._timer.start();
        }

        stop() {
            if (this._timer) {
                this._timer.stop();
                this._timer = null;
                console.log("TimerModel: clear timer");
            }
            this.clearEvent();
        }

        private clearEvent() {
            if (this._currentCallBack) {
                this.removeEventListener(C_EVT_UPDATE, this._currentCallBack, this._thisObj)
            }
        }

        private _currentCallBack: (event: egret.Event) => void;
        private _thisObj: any;

        addUpdateEvent(fun: (event: egret.Event) => void, thisObj: any) {
            this.clearEvent();
            this._currentCallBack = fun;
            this._thisObj = thisObj;
            this.addEventListener(C_EVT_UPDATE, this._currentCallBack, this._thisObj);
        }

        private onUpdate() {
            this._currentTime += 1000;
            let gameTime = this._currentTime - this._startTime;
            this.dispatchEventWith(C_EVT_UPDATE,false, gameTime);
        }
    }
}