# water-mask

> **WaterMask** 是一个使用 canvas 制作的水印图片的 JavaScript 库。

![image](https://raw.githubusercontent.com/allan2coder/water-mask/master/watermask.png)
![image](https://raw.githubusercontent.com/allan2coder/water-mask/master/watermask.png)
![image](https://raw.githubusercontent.com/allan2coder/water-mask/master/watermask.png)

### Install

> npm install water-mask

Then import it.

```js
<script type="text/javascript" src="path/index.js"></script>
// or
var WaterMask = require('water-mask');
// or
import WaterMask from "water-mask";
```

Then use **alimask(text, options)** API.

```js
WaterMask('阿花');

WaterMask('阿花', { color: '#f6dcd7' });

WaterMask('阿花', { alpha: 0.5 });
```


### API

The API is: **WaterMask(text, options)**.
 
 - **text** (String): required, the text in the watermark image. 
 - **options** (Object): optional, the options of watermark, with keys below:
   - **width** (Number): default is `250`.
   - **height** (Number): default is `80`.
   - **color** (String): the text color, default is `#ebebeb`.
   - **alpha** (Float): the text alpha(0 ~ 1), default is `0.8`.
   - **font** (String): the text font style, default is `10px Arial`.
   - **groupName** (String): group name.

The api return **the base64 string of watermark image** which can be used in css background / img tag.
