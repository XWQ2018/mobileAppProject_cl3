import { Toast } from 'vant';
/**
 * @Description: 调起原生API获取当前位置信息
 * @Param: 
 * @Author: xwq
 * @LastEditors: xwq
 * @LastEditTime: Do not edit
 * @return: 
 * @Date: 2019-07-20 09:37:09
 */
// 扩展API加载完毕后调用onPlusReady回调函数 
export function getCurrentPosition() {

    if (window.plus) {
        plus.geolocation.getCurrentPosition(function (p) {
            Toast({
                type: 'success',
                message: JSON.stringify(p),
                duration: 0,
            });

        }, function (e) {
            Toast({
                type: 'fail',
                message: 'Geolocation error: ' + e.message,
                duration: 0,
            });
        }, { provider: "amap", geocode: true });

    }
    // 扩展API加载完毕，现在可以正常调用扩展API
    /*  document.addEventListener('plusready', function () {
         Toast({
             type: 'success',
             message: '66666',
         });
         plus.geolocation.getCurrentPosition(function (p) {
             Toast({
                 type: 'success',
                 // message: 'Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude,
                 message: JSON.stringify(p),
                 duration: 0,
             });
 
         }, function (e) {
             Toast({
                 type: 'fail',
                 message: 'Geolocation error: ' + e.message,
                 duration: 0,
             });
         }, { provider: "amap", geocode: true });
     }, false); */

}
