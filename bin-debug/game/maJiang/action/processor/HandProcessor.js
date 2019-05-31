var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MaJ;
(function (MaJ) {
    var HandProcessor = (function () {
        function HandProcessor() {
        }
        HandProcessor.prototype.assertAdd = function (host, tiles) {
            return true;
        };
        HandProcessor.prototype.addTiles = function (host, tiles) {
            var hands = host.hands.concat(tiles);
            host.hands = hands;
        };
        return HandProcessor;
    }());
    MaJ.HandProcessor = HandProcessor;
    __reflect(HandProcessor.prototype, "MaJ.HandProcessor");
})(MaJ || (MaJ = {}));
