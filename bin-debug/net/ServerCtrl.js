var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var C_HTTP_HOST = "";
    var ServerCtrl = (function () {
        function ServerCtrl() {
        }
        ServerCtrl.getInstance = function () {
            if (this._instance == null) {
                this._instance = new ServerCtrl();
                this._instance.init();
            }
            return this._instance;
        };
        ServerCtrl.prototype.init = function () {
            //重置消息队列
            this.m_msgQueue = [];
            net.AjaxRequest.getInstance().setDelegate(this);
        };
        ServerCtrl.prototype.setDelegate = function (delegate) {
            this.m_delegate = delegate;
        };
        ServerCtrl.prototype.update = function () {
            if (this.m_delegate && this.m_msgQueue.length > 0) {
                var length_1 = this.m_msgQueue.length;
                length_1 = (length_1 < 100) ? length_1 : 100;
                //分帧处理
                var dispatch = this.m_msgQueue.splice(0, length_1);
                while (dispatch.length > 0) {
                    this.m_delegate.dispatchEventWith("gameEvent", dispatch.pop());
                }
            }
        };
        ServerCtrl.prototype.login = function (user) {
            net.AjaxRequest.getInstance().request(C_HTTP_HOST, net.ERequestMethods.POST, user);
        };
        return ServerCtrl;
    }());
    net.ServerCtrl = ServerCtrl;
    __reflect(ServerCtrl.prototype, "net.ServerCtrl", ["net.IServerCtrl", "net.IHttpServer"]);
})(net || (net = {}));
