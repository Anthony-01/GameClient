namespace control {
    export interface IGameControl {
        addEvent(): void;           //添加监听事件
        removeEvent(): void;        //取消监听事件
    }
}