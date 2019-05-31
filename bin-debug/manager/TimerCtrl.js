var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var manager;
(function (manager) {
    var TimerCtrl = (function () {
        function TimerCtrl() {
            /**
             * 时间队列
             */
            this._timerQueue = [];
        }
        /**
         *获取实例
         */
        TimerCtrl.getInstance = function () {
            if (this.m_sInstance == null) {
                this.m_sInstance = new TimerCtrl();
                this.m_sInstance.init();
            }
            return this.m_sInstance;
        };
        /**
         * 初始化
         */
        TimerCtrl.prototype.init = function () {
            this.clean();
        };
        /**
         * 创建定时器
         */
        TimerCtrl.prototype.createTimer = function (target, delay, repeat, callback, key) {
            if (delay === void 0) { delay = 1000.0 / 60.0; }
            //遍历查找
            for (var i = 0; i < this._timerQueue.length; i++) {
                var timer_1 = this._timerQueue[i];
                if (timer_1.key == key) {
                    console.log("队列中存在相同KEY的定时器");
                    return false;
                }
            }
            //创建定时
            var timer = new egret.Timer(delay, repeat);
            timer.addEventListener(egret.TimerEvent.TIMER, callback, target);
            timer.start();
            //定时信息
            var map = {
                target: target,
                key: key,
                func: callback,
                timer: timer
            };
            //加入队列
            this._timerQueue.push(map);
            return true;
        };
        /**
         * 关闭定时器
         */
        TimerCtrl.prototype.killTimer = function (target, key) {
            for (var i = 0; i < this._timerQueue.length; i++) {
                var timerInfo = this._timerQueue[i];
                if (timerInfo.key == key) {
                    if (target != timerInfo.target) {
                        console.log("对象不匹配");
                        return false;
                    }
                    //回调方法
                    var callback = timerInfo.func;
                    var timer = timerInfo.timer;
                    //移除监听
                    timer.removeEventListener(egret.TimerEvent.TIMER, callback, target);
                    //停止定时
                    timer.stop();
                    //引用置空
                    timer = null;
                    //移除队列
                    this._timerQueue.splice(i, 1);
                    break;
                }
            }
            return true;
        };
        /**
         * 移除所有定时器
         */
        TimerCtrl.prototype.clean = function () {
            this._timerQueue.forEach(function (timer) {
                //移除定时
                var target = timer.target;
                var callback = timer.func;
                var time = timer.timer;
                time.removeEventListener(egret.TimerEvent.TIMER, callback, target);
                time.stop();
                time = null;
            });
            this._timerQueue = [];
        };
        return TimerCtrl;
    }());
    manager.TimerCtrl = TimerCtrl;
    __reflect(TimerCtrl.prototype, "manager.TimerCtrl");
})(manager || (manager = {}));
