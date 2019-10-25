
/* 锁住弹窗背景滚动方案一 */

export function lockBackgroundScroll(isOverly) {

    let bodyEl = document.body;
    let top = 0;

    (function stopBodyScroll(isOverly) {
        if (isOverly) {
            top = window.scrollY;
            bodyEl.style.position = 'fixed';
            bodyEl.style.top = -top + 'px';
        } else {
            bodyEl.style.position = '';
            bodyEl.style.top = '';

            window.scrollTo(0, top); // 回到原先的top
        }
    })(isOverly);

}


/* 锁住弹窗背景滚动方案二 */
export function lockBackgroundTwo() {

    const btnNode = document.querySelector('.btn');
    const containerNode = document.querySelector('.container');
    const layerNode = document.querySelector('.layer');
    const contentNode = document.querySelector('.content');
    let startY = 0; // 记录开始滑动的坐标，用于判断滑动方向
    let status = 0; // 0：未开始，1：已开始，2：滑动中

    // 打开蒙层
    btnNode.addEventListener('click', () => {
        containerNode.style.display = 'block';
    }, false);

    // 蒙层部分始终阻止默认行为
    layerNode.addEventListener('touchstart', e => {
        e.preventDefault();
    }, false);

    // 核心部分
    contentNode.addEventListener('touchstart', e => {
        status = 1;
        startY = e.targetTouches[0].pageY;
    }, false);

    contentNode.addEventListener('touchmove', e => {
        // 判定一次就够了
        if (status !== 1) return;

        status = 2;

        let t = e.target || e.srcElement;
        let py = e.targetTouches[0].pageY;
        let ch = t.clientHeight; // 内容可视高度
        let sh = t.scrollHeight; // 内容滚动高度
        let st = t.scrollTop; // 当前滚动高度

        // 已经到头部尽头了还要向上滑动，阻止它
        if (st === 0 && startY < py) {
            e.preventDefault();
        }

        // 已经到低部尽头了还要向下滑动，阻止它
        if ((st === sh - ch) && startY > py) {
            e.preventDefault();
        }
    }, false);

    contentNode.addEventListener('touchend', e => {
        status = 0;
    }, false);
}