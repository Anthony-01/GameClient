/**
 * 网络连接模块
 * */
namespace net {
    //网关服务
    export interface IServerCtrl {
        m_delegate: any;               //当前连接模块
        m_msgQueue: any[];             //当前消息队列
        setDelegate(delegate: any);    //切换游戏模块
        init(): void;                  //初始化网关服务
        update(): void;                //更新游戏连接
    }

    export interface IUser {
        username: string;
        password: string;
    }

    //用户服务
    export interface IHttpServer {
        login(user: IUser): void;                 //用户登录
    }

    export enum ERequestMethods {
        GET  = "get",
        POST = "post"
    }

    export interface IAjaxRequest {
        request(url: string, methods: ERequestMethods, params: any[]);    //
    }
}