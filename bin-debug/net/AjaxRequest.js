var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var AjaxRequest = (function () {
        function AjaxRequest() {
        }
        AjaxRequest.getInstance = function () {
            if (this._instance == null) {
                this._instance = new AjaxRequest;
                this._instance.init();
            }
            return this._instance;
        };
        AjaxRequest.prototype.setDelegate = function (delagate) {
            this._delegate = delagate;
        };
        AjaxRequest.prototype.init = function () {
            this._http = new egret.HttpRequest();
            this._http.response = egret.HttpResponseType.ARRAY_BUFFER;
            this._http.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            this._http.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
            this._http.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
        };
        AjaxRequest.prototype.request = function (url, methods, params) {
            var paraStr = "";
            for (var key in params) {
                if (paraStr.length == 0) {
                    if (methods == net.ERequestMethods.POST) {
                        paraStr += "?";
                    }
                }
                else {
                    paraStr += "&";
                }
                paraStr += key + "=" + params[key];
            }
            if (methods == net.ERequestMethods.POST) {
                this._http.open(url, egret.HttpMethod.POST);
                this._http.send(paraStr);
            }
            else {
                this._http.open(url + paraStr, egret.HttpMethod.GET);
                this._http.send();
            }
        };
        AjaxRequest.prototype.onGetComplete = function (event) {
            //node的缓冲区如何取值
            var request = event.currentTarget;
            console.log("http get data : ", request.response);
            if (this._delegate) {
                this._delegate.m_msgQueue.push(request.response);
            }
        };
        AjaxRequest.prototype.onGetIOError = function (event) {
            console.log("http请求错误:", event);
        };
        AjaxRequest.prototype.onGetProgress = function (event) {
            console.log("http progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        };
        return AjaxRequest;
    }());
    net.AjaxRequest = AjaxRequest;
    __reflect(AjaxRequest.prototype, "net.AjaxRequest", ["net.IAjaxRequest"]);
})(net || (net = {}));
