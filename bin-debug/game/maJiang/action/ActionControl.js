var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var control;
(function (control) {
    var ActionControl = (function () {
        function ActionControl() {
        }
        return ActionControl;
    }());
    control.ActionControl = ActionControl;
    __reflect(ActionControl.prototype, "control.ActionControl");
})(control || (control = {}));
