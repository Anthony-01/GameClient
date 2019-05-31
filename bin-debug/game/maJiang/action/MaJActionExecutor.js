var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MaJ;
(function (MaJ) {
    var MaJActionExecutor = (function () {
        function MaJActionExecutor() {
            var drawProcessor = new MaJ.DrawProcessor(); //摸牌处理器
            var discardProcessor = new MaJ.DiscardProcessor(); //出牌处理器
            this._processorMap = (_a = {},
                _a[MaJ.EMahAction.DRAW4] = drawProcessor,
                _a[MaJ.EMahAction.DRAW2] = drawProcessor,
                _a[MaJ.EMahAction.DRAW1] = drawProcessor,
                _a[MaJ.EMahAction.DRAW0] = drawProcessor,
                _a[MaJ.EMahAction.DISCARD] = discardProcessor,
                _a[MaJ.EMahAction.READY] = discardProcessor,
                _a);
            var _a;
        }
        /**
         * 验证操作
         * */
        MaJActionExecutor.prototype.assertAction = function (action) {
            return;
        };
        /**
         * 执行操作
         * */
        MaJActionExecutor.prototype.applyAction = function (action) {
        };
        /**
         * 撤销操作
         * */
        MaJActionExecutor.prototype.cancelAction = function (action) {
            if (action.tiles) {
            }
            return;
        };
        return MaJActionExecutor;
    }());
    MaJ.MaJActionExecutor = MaJActionExecutor;
    __reflect(MaJActionExecutor.prototype, "MaJ.MaJActionExecutor", ["MaJ.IActionExecutor"]);
})(MaJ || (MaJ = {}));
