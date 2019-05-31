namespace control {
    export class GameControl extends egret.EventDispatcher {
        private static _ins: GameControl;

        public static getInstance(): GameControl {
            if (this._ins == null) {
                this._ins = new GameControl();
            }
            return this._ins;
        }

        static addEvent(type: string, fun: Function, thisObj: any) {
            this.getInstance().addEventListener(type, fun, thisObj);
        }

        static removeEvent(type: string, fun: Function, thisObj: any) {
            this.getInstance().removeEventListener(type, fun, thisObj);
        }

        static dispatch(type: string, data: any) {
            let event = new game.GameEvents(type, data);
            event.object = data;
            this.getInstance().dispatchEvent(event);
        }
    }
}