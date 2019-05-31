namespace MaJ {

    /**
     * 麻将玩家
     * */
    export enum EMahGamer {
        MINE,//本家
        NEXT,//下家
        OPPOSITE,//对家
        FRONT,//上家
        NONE,//尚未有归属
    }


    /**
     * 麻将操作数据
     * */
    export interface IMaJAction {
        //玩家方位
        gamerID: EMahGamer;
        //操作
        action: EMahAction;
        //操作牌
        tiles?: MahJongData[];
    }

    /**
     * 麻将数据
     * */
    export type MahJongData = number;

    /**
     * 玩家操作类型枚举
     * 麻将相关操作
     * */
    export enum EMahAction {
        JOIN = 0x200,
        LEFT = 0x201,
        DICE = 0x202, //掷骰子
        DRAW4 = 0x203, //摸4张
        DRAW2 = 0x204, //摸2张
        DRAW1 = 0x205, //摸1张
        DRAW0 = 0x206, //摸1张【尾】
        RESULT = 0x207, //结算
        DISCARD = 0x01,  //出牌
        CHOW = 0x02,  //吃牌
        PONG = 0x04,  //碰牌
        KONG = 0x08,  //杠牌
        FLOWER_KONG = 0x10,  //风杠
        READY = 0x20,  //听牌
        WIN = 0x40,  //和牌
        CANCEL = 0xFFFF //取消
    }

    /**
     * 动作执行宿主，麻将数据源
     * */
    export interface IMahActionHost {
        //手牌
        hands: MahJongData[];
        //吃碰杠的牌
        chows: IChowData[];
        //胡牌
        wins: MahJongData[];
        //出牌
        discards: MahJongData[];
        //花杠
        flowerKongVec: MahJongData[];
        //上次摸牌
        lastDraw: number;
        //上次出牌
        lastDiscard: number;
    }

    /**
     * 吃砰杠动作数据
     * */
    export interface IChowData {
        //类型
        type: EMahAction.CHOW | EMahAction.PONG | EMahAction.KONG;
        //牌值
        value: MahJongData;
        //杠牌额外类型
        extra?: number;
    }

    export interface IActionExecutor {
        /**
         * 验证操作
         * */
        assertAction(action: IMaJAction): boolean;

        /**
         * 执行操作
         * */
        applyAction(action: IMaJAction): void;

        /**
         * 撤销操作
         * */
        cancelAction(action: IMaJAction): boolean;
    }

    /**
     * 行动执行单元
     * */
    export interface IActionProcessor {
        /**
         * 验证操作
         * */
        assertAction(action: IMaJAction, host: IMahActionHost): boolean;

        /**
         * 执行操作
         * */
        applyAction(action: IMaJAction, host: IMahActionHost): void;

        /**
         * 撤销操作
         * */
        cancelAction(action: IMaJAction, host: IMahActionHost): boolean;
    }

    /**
     * 麻将宿主
     * */
    export interface IMaJActionHost {
        //手牌
        hands: MahJongData[];
        //吃碰杠的牌
        chows: IChowData[];
        //胡牌
        wins: MahJongData[];
        //出牌
        discards: MahJongData[];
        //花杠
        flowerKongVec: MahJongData[];
        //上次摸牌
        lastDraw: number;
        //上次出牌
        lastDiscard: number;
    }
}