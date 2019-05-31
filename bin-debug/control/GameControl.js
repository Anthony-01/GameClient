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
var control;
(function (control) {
    var GameControl = (function (_super) {
        __extends(GameControl, _super);
        function GameControl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameControl.getInstance = function () {
            if (this._ins == null) {
                this._ins = new GameControl();
            }
            return this._ins;
        };
        GameControl.addEvent = function (type, fun, thisObj) {
            this.getInstance().addEventListener(type, fun, thisObj);
        };
        GameControl.removeEvent = function (type, fun, thisObj) {
            this.getInstance().removeEventListener(type, fun, thisObj);
        };
        GameControl.dispatch = function (type, data) {
            var event = new game.GameEvents(type, data);
            event.object = data;
            this.getInstance().dispatchEvent(event);
        };
        return GameControl;
    }(egret.EventDispatcher));
    control.GameControl = GameControl;
    __reflect(GameControl.prototype, "control.GameControl");
})(control || (control = {}));
