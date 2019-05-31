namespace MaJ {
    export class GameModel extends model.GameModel implements IGameModel {

        constructor() {
            super();
        }

        initChildModel() {
            super.initChildModel();
        }

        onGameStart() {
            this.m_timerCtrl.addUpdateEvent(this.onUpdate, this);
            this.m_timerCtrl.start();
        }

        onUpdate(event: egret.Event) {
            let time = event.data;
            console.log(`游戏已开始时间:${time / 1000}`);
        }
    }
}