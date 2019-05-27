namespace model {
    export interface IGameModel {
        m_gameFrame: any;               //游戏框架
        m_gameView: any;                //游戏视图
        init(): any;                    //重置游戏
    }
}