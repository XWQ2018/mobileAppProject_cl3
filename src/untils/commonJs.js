
/**
* @Description: 获取全部地址栏参数
* @Param: 
* @Author: xwq
* @Date: 2019-02-19 09:15:53
* @LastEditors: Please set LastEditors
* @LastEditTime: 2019-05-13 09:38:33
* @return: 
*/
export function getUrlParams() {
    let reg = new RegExp('(^|&)*=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    let query = {};
    if (r) {
        r = unescape(decodeURIComponent(r.input));
        r = r.split('&');
        if (r.length > 0) {
            query = {};
            for (let i = 0; i < r.length; i++) {
                r[i] = r[i].split('=');
                query[r[i][0]] = r[i][1];
            }
        }
    }
    return query;
}
