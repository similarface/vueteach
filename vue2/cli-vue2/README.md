# cli-vue2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



- babel.config.js babel 控制文件
- package.json 包依赖
- package-lock.json 包锁定



2. Vue脚手架隐藏了所有webpack相关配置，若想查看具体的webpack配置，请执行
``` bash
vue inspect > output.js
```

/**
关于不同版本的Vue
    1. vue.js 与 vue.runtime.xxx.js的区别
        （1）. vue.js是完整的Vue 包含： 核心功能+模版解析器
        （2）. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模版解析器
    2. 因为vue.runtime.xxx.js没有模版解析器，所以不能使用template配置项，需要使用
        render函数接收到的createElement函数去指定具体内容

*/

See https://cli.vuejs.org/zh/config/#pages

vue.config.js
``` js
pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
```


## ref属性
    1. 被用来给元素或子组件注册饮用信息(id的替代者)
    2. 应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）
    3. 使用方式：
        打标识： <h1 ref='xxx'>...</h1> <School ref='xxx'></School>
        获取： this.$refs.xxx

## 配置props

功能： 让组件接受外部传过来的数据
1. 传递数据
   <Demo name="xxx"/>
2. 接受数据
   第一种方式（只接受）
   ```js
    props:['name']
    ```
   第二种方式（接受并限定类型）
   ``` js
   props:{
        name:String   
   }
   ```
   第三种方式（接受并限定类型并设置 是否必须+默认值）
   ```js
    props: {
        name: {
            type:String,    // 类型
            required:false, //必要性
            default:''     //默认值
       } 
   }
   ```
   
备注：props是只读的，Vue底层检测props的修改，如果进行了修改，就会发生警告
    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据


## mixin(混入)
    功能： 可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        1 定义混合 e.g.
    export const xxx = {
        data() {...},
        methods: {...}
    }
    第二部使用混入：
    a. 全局混入 Vue.mixin(xxx)
    b. 局部混入 mixins:['xxx']

## 插件

    功能：用于增强Vue
    本质： 包含一个install的方法对象，install的第一个参数是Vue
    第二个以后的参数是插件使用者传递的数据
    定规插件：
    对象.install=function(Vue,options){
        // 全局过滤器
        Vue.filter(...)

        // 自定指令
        Vue.directive(...)
        // 定义混入
        Vue.mixin(...)
        // Vue原型上添加方法
        Vue.prototype.$method = ()=>{...}      
        Vue.prototype.propetry = xxx
    }