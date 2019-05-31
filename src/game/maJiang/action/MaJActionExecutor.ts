namespace MaJ {
    export class MaJActionExecutor implements IActionExecutor {  //同一个关系继承
        //麻将宿主
        host: any;
        //动作执行器表
        protected _processorMap:{[action:number]: IActionProcessor};

        constructor() {
            let drawProcessor = new DrawProcessor();//摸牌处理器
            let discardProcessor = new DiscardProcessor();//出牌处理器
            this._processorMap = {
                [EMahAction.DRAW4]:drawProcessor,
                [EMahAction.DRAW2]:drawProcessor,
                [EMahAction.DRAW1]:drawProcessor,
                [EMahAction.DRAW0]:drawProcessor,
                [EMahAction.DISCARD]:discardProcessor,
                [EMahAction.READY]:discardProcessor
            };
        }

        /**
         * 验证操作
         * */
        assertAction(action: IMaJAction): boolean {
            return
        }

        /**
         * 执行操作
         * */
        applyAction(action: IMaJAction): void {

        }

        /**
         * 撤销操作
         * */
        cancelAction(action: IMaJAction): boolean {
            if (action.tiles) {

            }
            return
        }
    }
}