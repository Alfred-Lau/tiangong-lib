function debounce(fn, wait = 50, immediate) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);

        // ------ 新增部分 start ------
        // immediate 为 true 表示第一次触发后执行
        // timer 为空表示首次触发
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        // ------ 新增部分 end ------

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}

// DEMO
/* const fn = () => console.log('函数裸奔');
document.addEventListener('scroll', fn); */

// 执行 debounce 函数返回新函数
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000, true);
// 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
document.addEventListener('scroll', betterFn);
