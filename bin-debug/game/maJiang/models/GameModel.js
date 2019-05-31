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
    var GameModel = (function (_super) {
        __extends(GameModel, _super);
        function GameModel() {
            return _super.call(this) || this;
        }
        GameModel.prototype.initChildModel = function () {
            _super.prototype.initChildModel.call(this);
        };
        GameModel.prototype.onGameStart = function () {
            this.m_timerCtrl.addUpdateEvent(this.onUpdate, this);
            this.m_timerCtrl.start();
        };
        GameModel.prototype.onUpdate = function (event) {
            var time = event.data;
            console.log("\u6E38\u620F\u5DF2\u5F00\u59CB\u65F6\u95F4:" + time / 1000);
        };
        return GameModel;
    }(model.GameModel));
    MaJ.GameModel = GameModel;
    __reflect(GameModel.prototype, "MaJ.GameModel", ["MaJ.IGameModel"]);
})(MaJ || (MaJ = {}));
