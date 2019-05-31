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
var MaJ;
(function (MaJ) {
    var DrawProcessor = (function (_super) {
        __extends(DrawProcessor, _super);
        function DrawProcessor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 验证操作
         * */
        DrawProcessor.prototype.assertAction = function (action, host) {
            //验证
            return;
        };
        /**
         * 执行操作
         * */
        DrawProcessor.prototype.applyAction = function (action, host) {
        };
        /**
         * 撤销操作
         * */
        DrawProcessor.prototype.cancelAction = function (action, host) {
            return;
        };
        return DrawProcessor;
    }(MaJ.HandProcessor));
    MaJ.DrawProcessor = DrawProcessor;
    __reflect(DrawProcessor.prototype, "MaJ.DrawProcessor", ["MaJ.IActionProcessor"]);
})(MaJ || (MaJ = {}));
