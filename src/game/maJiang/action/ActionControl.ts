namespace control {

    export interface IAction {
        player: number;         //玩家
        type: number;           //每个游戏中相对应的动作enum
        data: any;              //动作附带的数据
    }
    /**
     * 需求
     * 在游戏onUpdate中调用,如何管理动作（业务逻辑），执行动作的时候玩家不能进行操作
     * GameModel -> ActionModel、
     * 按队列执行游戏动作（备用promise）
     * 查询当前游戏动作
     * ************取出游戏动作，通过事件的方式通知动作结束
     * ************通过事件的形式通知model进行下一步操作
     * */
    export interface IActionCtrl {
        /**
         * 在队列中添加动作
         * */
        pushAction(): void;

        /**
         * 添加回调
         * */
        addEvent(type: string, func: Function, thisObj: any): void;
    }

    export class ActionControl {

    }
}