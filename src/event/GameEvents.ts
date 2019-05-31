namespace game {
    export class GameEvents extends egret.Event {
        public object: any;

        constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any) {
            super(type, bubbles, cancelable, data);
        }
    }
}