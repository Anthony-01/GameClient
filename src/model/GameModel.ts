namespace model {
    var frameManager;
    export class GameModel implements IGameModel {
        m_gameFrame: any;
        m_gameView: any;

        constructor() {
            //游戏计时器 => 有无必要设定游戏计时器
            manager.TimerCtrl.getInstance().createTimer(this,1000 / 60,0,this.onUpdate,"update");

            this.init();
        }

        init(): void {
            this.m_gameFrame = frameManager.getInstance();
        }

        onUpdate() {
 
        }
    }
}