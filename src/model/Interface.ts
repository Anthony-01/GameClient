namespace model {
    export interface IGameModel {
        m_gameFrame: any;               //游戏框架
        m_gameView: any;                //游戏视图
        initChildModel(): any;          //实例化子模块
    }

    export interface ITimerModel {
        start(): void;
        stop(): void;
        addUpdateEvent(fun: (event: egret.Event) => void, thisObj: any): void;
    }
}