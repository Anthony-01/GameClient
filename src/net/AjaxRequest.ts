namespace net {
    export class AjaxRequest implements IAjaxRequest {
        private static _instance: AjaxRequest;

        public static getInstance(): AjaxRequest {
            if (this._instance == null) {
                this._instance = new AjaxRequest;
                this._instance.init()
            }
            return this._instance;
        }

        private _http: egret.HttpRequest;

        //当前的消息模块
        private _delegate: IServerCtrl;

        setDelegate(delagate: IServerCtrl) {
            this._delegate = delagate;
        }

        private init() {
            this._http = new egret.HttpRequest();
            this._http.response = egret.HttpResponseType.ARRAY_BUFFER;
            this._http.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
            this._http.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
            this._http.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
        }

        request(url: string, methods: ERequestMethods, params: any) {
            let paraStr = "";
            for (let key in params) {
                if (paraStr.length == 0) {
                    if (methods == ERequestMethods.POST) {
                        paraStr += "?";
                    }
                } else {
                    paraStr += "&";
                }
                paraStr += `${key}=${params[key]}`;
            }
            if (methods ==  ERequestMethods.POST) {
                this._http.open(url, egret.HttpMethod.POST);
                this._http.send(paraStr);
            } else {
                this._http.open(url + paraStr, egret.HttpMethod.GET);
                this._http.send();
            }
        }

        private onGetComplete(event:egret.Event) {
            //node的缓冲区如何取值
            let request = <egret.HttpRequest>event.currentTarget;
            console.log("http get data : ",request.response);
            if (this._delegate) {
                this._delegate.m_msgQueue.push(request.response);
            }
        }

        private onGetIOError(event:egret.IOErrorEvent) {
            console.log("http请求错误:", event)
        }

        private onGetProgress(event: egret.ProgressEvent) {
            console.log("http progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
        }
    }
}