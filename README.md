# zl-enc-dec
封装常用的js加密解密——如Md5-Rsa-Aes等


## 引入
```js

  //node端使用引入
 const zl_enc_dec=require("zl-enc-dec");

 //前端import引入
 import zl_enc_dec from "zl-enc-dec";

  //script引入
 <script src="https://cdn.jsdelivr.net/npm/zl-enc-dec@1.0.1/index.js"></script>
 const zl_enc_dec=window["zl-enc-dec"];
  
```

## 使用MD5

```js
let { md5 }=zl_enc_dec;
//加密字符串
const hash = md5('string to hash');

//加密buffers
 const hash = md5(Buffer.from('carmine'));

//加密TypedArrays
const int16Array = new Int16Array(2);
int16Array[0] = 42;
const hash = md5(int16Array);

//加密objects
const hash = md5({
    name: 'carmine'
});

//加密arrays
const hash = md5(['hash', 'this', 'array']);

//加密primitives
const hash = md5(3.14159265359);
const hash = md5(true);

// 更详细使用：https://github.com/blueimp/JavaScript-MD5
```