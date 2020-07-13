当前框架使用了插件`postcss-px-to-viewport`在项目构建的时候，将`px`转换为`vw`,来满足移动端适配需求
有些同学可能想将`vw`替换为`rem`，那应该怎么做呢?

### 修改插件
首先卸载原来的插件`postcss-px-to-viewport`
```shell
yarn remove postcss-px-to-viewport -D
```

### 安装`px`转`rem`的插件
```shell
yarn add postcss-pxtorem -D
yarn add amfe-flexible -S
```

### 修改`postcss.config.js`

``` javascript
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // 一般根据设计稿的 1/10来取值， 因为使用的是vant框架，推荐使用37.5，许多公司设计稿是750的，可以设置为75
      rootValue: 37.5,
      // 需要被转换的属性
      propList: ['*'],
      // 不进行px转换的选择器
      selectorBlackList: []
    }
  }
}
```

### 修改`main.js`
在`main.js`中引入`amfe-flexible`计算根元素的字体大小

```javascript
// rem h5 适配
import 'amfe-flexible/index.js'
```
