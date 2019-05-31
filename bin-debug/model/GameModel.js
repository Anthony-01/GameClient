var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var model;
(function (model) {
    var frameManager;
    //游戏模型，多组合，少继承
    /**
     * 游戏控制器
     * 1、timeControl，控制游戏画面更新等
     * 2、gameControl，负责通知用户的操作
     * */
    var GameModel = (function () {
        function GameModel() {
            this.addControl();
            this.initChildModel();
        }
        GameModel.prototype.addControl = function () {
            //游戏计时器 => 有无必要设定游戏计时器 == 时间更新模块的设定
            //每个游戏都需要一个总的计时器来记录总的游戏时长
            // manager.TimerCtrl.getInstance().createTimer(this,1000 / 60,0,this.onUpdate,"update");
        };
        GameModel.prototype.initChildModel = function () {
            // this.m_gameFrame = frameManager.getInstance();
            this.m_timerCtrl = new model.TimerModel();
            // this.m_timerCtrl.addUpdateEvent(this.onUpdate, this);
            // this.m_timerCtrl.start();
        };
        GameModel.prototype.onUpdate = function (event) {
            //更新用户事件
        };
        return GameModel;
    }());
    model.GameModel = GameModel;
    __reflect(GameModel.prototype, "model.GameModel", ["model.IGameModel"]);
})(model || (model = {}));
