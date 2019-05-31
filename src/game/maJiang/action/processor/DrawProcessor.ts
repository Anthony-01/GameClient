namespace MaJ {
    export class DrawProcessor extends HandProcessor implements IActionProcessor {
        /**
         * 验证操作
         * */
        assertAction(action:IMaJAction,host:IMahActionHost):boolean {
            //验证
            return
        }
        /**
         * 执行操作
         * */
        applyAction(action:IMaJAction,host:IMahActionHost):void {

        }
        /**
         * 撤销操作
         * */
        cancelAction(action:IMaJAction,host:IMahActionHost):boolean {
            return
        }
    }
}