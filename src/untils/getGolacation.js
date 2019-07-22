import { Toast } from 'vant';
/**
 * @Description: 调起原生API监听位置变化
 * @Param:
 * @Author: xwq
 * @LastEditors: xwq
 * @LastEditTime: Do not edit
 * @return:
 * @Date: 2019-07-20 09:37:09
 */
/* export function getWatchPosition() {
    // 扩展API加载完毕后调用onPlusReady回调函数
    document.addEventListener('plusready', onPlusReady, false);
    // 扩展API加载完毕，现在可以正常调用扩展API
    let wid = null;
    function onPlusReady() {
        wid = plus.geolocation.watchPosition(function (p) {
            alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
        }, function (e) {
            alert('Geolocation error: ' + e.message);
        });
    }

    function cancel() {
        plus.geolocation.clearWatch(wid);
        wid = null;
    }
} */
/**
 * @Description: 调起原生API获取当前位置信息
 * @Param: 
 * @Author: xwq
 * @LastEditors: xwq
 * @LastEditTime: Do not edit
 * @return: 
 * @Date: 2019-07-20 09:37:09
 */
// export function getCurrentPosition() {
// 扩展API加载完毕后调用onPlusReady回调函数 
document.addEventListener('plusready', onPlusReady, false);
// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady() {
    plus.geolocation.getCurrentPosition(function (p) {
        Toast({
            type: 'fail',
            message: 'Geolocation\nLatitude:' + p.coords.latitude,
            duration: 2000,
        });
        alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
    }, function (e) {
        alert('Geolocation error: ' + e.message);
    }, { provider: 'system' });
}
// }