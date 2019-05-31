var MaJ;
(function (MaJ) {
    /**
     * 麻将玩家
     * */
    var EMahGamer;
    (function (EMahGamer) {
        EMahGamer[EMahGamer["MINE"] = 0] = "MINE";
        EMahGamer[EMahGamer["NEXT"] = 1] = "NEXT";
        EMahGamer[EMahGamer["OPPOSITE"] = 2] = "OPPOSITE";
        EMahGamer[EMahGamer["FRONT"] = 3] = "FRONT";
        EMahGamer[EMahGamer["NONE"] = 4] = "NONE";
    })(EMahGamer = MaJ.EMahGamer || (MaJ.EMahGamer = {}));
    /**
     * 玩家操作类型枚举
     * 麻将相关操作
     * */
    var EMahAction;
    (function (EMahAction) {
        EMahAction[EMahAction["JOIN"] = 512] = "JOIN";
        EMahAction[EMahAction["LEFT"] = 513] = "LEFT";
        EMahAction[EMahAction["DICE"] = 514] = "DICE";
        EMahAction[EMahAction["DRAW4"] = 515] = "DRAW4";
        EMahAction[EMahAction["DRAW2"] = 516] = "DRAW2";
        EMahAction[EMahAction["DRAW1"] = 517] = "DRAW1";
        EMahAction[EMahAction["DRAW0"] = 518] = "DRAW0";
        EMahAction[EMahAction["RESULT"] = 519] = "RESULT";
        EMahAction[EMahAction["DISCARD"] = 1] = "DISCARD";
        EMahAction[EMahAction["CHOW"] = 2] = "CHOW";
        EMahAction[EMahAction["PONG"] = 4] = "PONG";
        EMahAction[EMahAction["KONG"] = 8] = "KONG";
        EMahAction[EMahAction["FLOWER_KONG"] = 16] = "FLOWER_KONG";
        EMahAction[EMahAction["READY"] = 32] = "READY";
        EMahAction[EMahAction["WIN"] = 64] = "WIN";
        EMahAction[EMahAction["CANCEL"] = 65535] = "CANCEL"; //取消
    })(EMahAction = MaJ.EMahAction || (MaJ.EMahAction = {}));
})(MaJ || (MaJ = {}));
