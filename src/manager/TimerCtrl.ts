namespace manager {
    export class TimerCtrl {
        /**
         *单例实例
         */
        private static m_sInstance: TimerCtrl;

        /**
         * 时间队列
         */
        private _timerQueue: any[] = [];

        /**
         *获取实例
         */
        public static getInstance(): TimerCtrl {
            if (this.m_sInstance == null) {
                this.m_sInstance = new TimerCtrl();
                this.m_sInstance.init();
            }
            return this.m_sInstance;
        }

        /**
         * 初始化
         */
        public init(): void {
            this.clean();
        }

        /**
         * 创建定时器
         */
        public createTimer(target: any, delay: number = 1000.0 / 60.0, repeat: number, callback: any, key: string): boolean {
            //遍历查找
            for (let i = 0; i < this._timerQueue.length; i++) {
                const timer = this._timerQueue[i];
                if (timer.key == key) {
                    console.log("队列中存在相同KEY的定时器");
                    return false;
                }
            }


            //创建定时
            let timer = new egret.Timer(delay, repeat);
            timer.addEventListener(egret.TimerEvent.TIMER, callback, target);
            timer.start();

            //定时信息
            let map =
                {
                    target: target,
                    key: key,
                    func: callback,
                    timer: timer
                };

            //加入队列
            this._timerQueue.push(map);

            return true;
        }

        /**
         * 关闭定时器
         */
        public killTimer(target: any, key: string): boolean {
            for (let i = 0; i < this._timerQueue.length; i++) {
                let timerInfo = this._timerQueue[i];
                if (timerInfo.key == key) {
                    if (target != timerInfo.target) {
                        console.log("对象不匹配");
                        return false;
                    }

                    //回调方法
                    let callback = timerInfo.func;
                    let timer = timerInfo.timer;

                    //移除监听
                    timer.removeEventListener(egret.TimerEvent.TIMER, callback, target);

                    //停止定时
                    timer.stop();

                    //引用置空
                    timer = null;

                    //移除队列
                    this._timerQueue.splice(i,1);
                    break;
                }
            }
            return true;
        }


        /**
         * 移除所有定时器
         */
        public clean() {
            this._timerQueue.forEach(timer => {
                //移除定时
                let target = timer.target;
                let callback = timer.func;
                let time = timer.timer;
                time.removeEventListener(egret.TimerEvent.TIMER, callback, target);
                time.stop();
                time = null;
            });


            this._timerQueue = [];
        }
    }
}