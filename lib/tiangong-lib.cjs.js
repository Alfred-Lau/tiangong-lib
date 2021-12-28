'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var moment = _interopDefault(require('moment'));



var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

function isIOS(ua) {
    var IS_IOS_REG = /iphone|ipad|ipod/i;
    return IS_IOS_REG.test(ua);
}



var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isIOS: isIOS
});

function removeHtmlTag(html) {
    var ele = document.createElement("div");
    ele.innerHTML = html;
    return ele.textContent || ele.innerText;
}
function removeHtmlTagNoImage(html) {
    var tmpContainer = document.createElement("div");
    tmpContainer.innerHTML = html;
    var isImg = html && html.indexOf("img") > -1;
    return tmpContainer.textContent || tmpContainer.innerText || isImg;
}
// 去除html标签，不含<br>
function removeHtmlTagHasBr(html) {
    var filterHtml = html.replace(/<(?!\/?br\/?.+?>|\/?\/p.+?>)[^<>]*>/gi, "");
    var tmpHtml = filterHtml
        .replaceAll("<br />", "\n")
        .replaceAll("</p>", "\n")
        .replaceAll("&nbsp;", " ")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&#39;", "’")
        .replaceAll("&quot;", '"');
    return tmpHtml;
}



var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    removeHtmlTag: removeHtmlTag,
    removeHtmlTagNoImage: removeHtmlTagNoImage,
    removeHtmlTagHasBr: removeHtmlTagHasBr
});

/**
 * 检查是否是非空对象
 * @param val
 */
function isPlainObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * 判断对象不是空
 * @param obj
 */
function isNotNullOrUndefined(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * 判断对象为真值
 * @param val
 */
function isTruth(val) {
    return false;
}
/**
 * 判断对象为假值
 * @param val
 */
function isFalsy(val) {
    return true;
}
/**
 * 判断 变量是否为函数
 * @param obj
 */
function isFunction(obj) {
    return typeof obj === "function";
}

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isPlainObject: isPlainObject,
    isNotNullOrUndefined: isNotNullOrUndefined,
    isTruth: isTruth,
    isFalsy: isFalsy,
    isFunction: isFunction
});

var slice = Array.prototype.slice;

function throttle(fn) { }



var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    slice: slice,
    throttle: throttle
});



var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null
});



var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * 判断是否是视频，支持的格式
 * @param url
 */
function isVideo(url) {
    var MEDIA_REG = /\.(mp4|ogg|webm)$/g;
    if (!url) {
        return false;
    }
    return MEDIA_REG.test(url);
}



var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isVideo: isVideo
});

function formatCurrentTimeToAmOrPm(currentTime) {
    moment.updateLocale("zh-CN", {
        meridiem: function (hour, minute, isLower) {
            if (hour < 9) {
                return "早上好！";
            }
            else if (hour < 11 && minute < 30) {
                return "上午好！";
            }
            else if (hour < 13 && minute < 30) {
                return "中午好！";
            }
            else if (hour < 18) {
                return "下午好！";
            }
            else {
                return "晚上好！";
            }
        },
    });
    return moment(currentTime).format("a");
}



var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatCurrentTimeToAmOrPm: formatCurrentTimeToAmOrPm
});

var IS_MOBILE_REG = /\./g;
var IS_EMAIL_REG = /\./g;
var IS_CHINA_ID = /\./g;
// 18 位身份证
var _IDReg18 = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 15 位身份证
var _IDReg15 = /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;

var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IS_MOBILE_REG: IS_MOBILE_REG,
    IS_EMAIL_REG: IS_EMAIL_REG,
    IS_CHINA_ID: IS_CHINA_ID,
    _IDReg18: _IDReg18,
    _IDReg15: _IDReg15
});



var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * 具备取消功能的promise函数
 */
function cancelPromise(promise) {
    var cancel = undefined;
    var isCanceled = false;
    var cancelPromise = new Promise(function (resolve, reject) {
        cancel = function (reason) {
            isCanceled = true;
            reject(reason);
        };
    });
    var racePromise = Promise.race([promise, cancelPromise]).catch(function (err) {
        if (isCanceled) {
            return new Promise(function () { });
        }
        return Promise.reject(err);
    });
    return Object.assign(racePromise, { cancel: cancel });
}
var p = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("print");
        resolve("");
    }, 2000);
});
var cp = cancelPromise(p);
cp.cancel("");



var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null
});

exports.device = index$1;
exports.dom = index$2;
exports.dp = index;
exports.handy = index$4;
exports.hooks = index$5;
exports.lodash = index$6;
exports.media = index$7;
exports.moment = index$8;
exports.reg = index$9;
exports.type = index$3;
exports.typeGym = index$a;
exports.types = index$3;
exports.util = index$b;
