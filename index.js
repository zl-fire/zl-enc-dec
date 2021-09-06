(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-md5')) :
    typeof define === 'function' && define.amd ? define(['blueimp-md5'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['zl-enc-dec'] = factory(global.md5_enc));
}(this, (function (md5_enc) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var md5_enc__default = /*#__PURE__*/_interopDefaultLegacy(md5_enc);

    /**
     * @description 可以对任何数据进行md5加密
     * @param {any} params 要加密的对象，可以为任何结构
     * @example 
     * 
     * //加密字符串
     *  const hash = md5('string to hash');
     * 
     * //加密buffers
     *  const hash = md5(Buffer.from('carmine'));
     * 
     * //加密TypedArrays
     * const int16Array = new Int16Array(2);
     * int16Array[0] = 42;
     * const hash = md5(int16Array);
     * 
     * //加密objects
     * const hash = md5({
     *     name: 'carmine'
     * });
     * 
     * //加密arrays
     * const hash = md5(['hash', 'this', 'array']);
     * 
     * //加密primitives
     * const hash = md5(3.14159265359);
     * const hash = md5(true);
     * 
     * @returns {string} 加密产生的hash值
     */

    function md5(params) {
        return md5_enc__default['default'](params);
    }

    var main = {
        md5
    };

    return main;

})));
