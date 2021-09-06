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
export function md5(params: any): string;
