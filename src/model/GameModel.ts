namespace model {
    var frameManager;
    //游戏模型，多组合，少继承
    /**
     * 游戏控制器
     * 1、timeControl，控制游戏画面更新等
     * 2、gameControl，负责通知用户的操作
     * */
    export class GameModel implements IGameModel {
        //网络框架，负责下发网络消息，如何接收外部的消息，内部逻辑由具体的游戏模型实现
        m_gameFrame: any;
        //游戏界面，负责表现
        m_gameView: any;
        //游戏动作处理器
        m_actionMaster: any;
        //

        /**
         * 时间管理模块
         * 通过事件的形式给具体的游戏模型发送事件，模型自行决定是否接收该事件
         * */
        m_timerCtrl: ITimerModel;

        //处理游戏业务逻辑所需数据
        //游戏玩家数据，model即外部控制器
        m_host: any;

        constructor() {
            this.addControl();
            this.initChildModel();
        }

        addControl() {
            //游戏计时器 => 有无必要设定游戏计时器 == 时间更新模块的设定
            //每个游戏都需要一个总的计时器来记录总的游戏时长
            // manager.TimerCtrl.getInstance().createTimer(this,1000 / 60,0,this.onUpdate,"update");
        }

        initChildModel(): void {
            // this.m_gameFrame = frameManager.getInstance();
            this.m_timerCtrl = new TimerModel();
            // this.m_timerCtrl.addUpdateEvent(this.onUpdate, this);
            // this.m_timerCtrl.start();
        }

        onUpdate(event: egret.Event): void {
            //更新用户事件
        }
    }
}