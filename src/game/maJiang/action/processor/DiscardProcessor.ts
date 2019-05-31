namespace MaJ {
    export class DiscardProcessor extends HandProcessor implements IActionProcessor {


        /**
         * 验证操作
         * */
        assertAction(action:IMaJAction,host:IMahActionHost):boolean {
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