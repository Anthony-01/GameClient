/**
 * 网络连接模块
 * */
var net;
(function (net) {
    var ERequestMethods;
    (function (ERequestMethods) {
        ERequestMethods["GET"] = "get";
        ERequestMethods["POST"] = "post";
    })(ERequestMethods = net.ERequestMethods || (net.ERequestMethods = {}));
})(net || (net = {}));
