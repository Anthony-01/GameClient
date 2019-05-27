namespace net {

    const C_HTTP_HOST = "";

    export class ServerCtrl implements IServerCtrl, IHttpServer {

        private static _instance: ServerCtrl;

        //当前游戏代理
        m_delegate: any;

        //消息队列
        m_msgQueue: any[];

        public static getInstance(): ServerCtrl {
            if (this._instance == null) {
                this._instance = new ServerCtrl();
                this._instance.init();
            }
            return this._instance;
        }

        public init() {
            //重置消息队列
            this.m_msgQueue = [];
            net.AjaxRequest.getInstance().setDelegate(this);
        }

        setDelegate(delegate: any) {
            this.m_delegate = delegate;
        }

        update() {
            if (this.m_delegate && this.m_msgQueue.length > 0) {
                let length = this.m_msgQueue.length;
                length = (length < 100) ? length : 100;

                //分帧处理
                let dispatch = this.m_msgQueue.splice(0, length);
                while(dispatch.length > 0) {
                    this.m_delegate.dispatchEventWith("gameEvent", dispatch.pop());
                }
            }
        }

        login(user: IUser): void {
            net.AjaxRequest.getInstance().request(C_HTTP_HOST, ERequestMethods.POST, user);
        }
    }
}