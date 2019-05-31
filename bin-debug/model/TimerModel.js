var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var model;
(function (model) {
    model.C_EVT_UPDATE = "update";
    var TimerModel = (function (_super) {
        __extends(TimerModel, _super);
        function TimerModel() {
            return _super.call(this) || this;
        }
        TimerModel.prototype.start = function () {
            this._startTime = egret.getTimer();
            this._currentTime = this._startTime;
            this._timer = new egret.Timer(1000, 0);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
            this._timer.start();
        };
        TimerModel.prototype.stop = function () {
            if (this._timer) {
                this._timer.stop();
                this._timer = null;
                console.log("TimerModel: clear timer");
            }
            this.clearEvent();
        };
        TimerModel.prototype.clearEvent = function () {
            if (this._currentCallBack) {
                this.removeEventListener(model.C_EVT_UPDATE, this._currentCallBack, this._thisObj);
            }
        };
        TimerModel.prototype.addUpdateEvent = function (fun, thisObj) {
            this.clearEvent();
            this._currentCallBack = fun;
            this._thisObj = thisObj;
            this.addEventListener(model.C_EVT_UPDATE, this._currentCallBack, this._thisObj);
        };
        TimerModel.prototype.onUpdate = function () {
            this._currentTime += 1000;
            var gameTime = this._currentTime - this._startTime;
            this.dispatchEventWith(model.C_EVT_UPDATE, false, gameTime);
        };
        return TimerModel;
    }(egret.EventDispatcher));
    model.TimerModel = TimerModel;
    __reflect(TimerModel.prototype, "model.TimerModel");
})(model || (model = {}));
