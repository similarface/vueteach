export default {
    install(Vue,x,y) {
        console.log(x,y)
        console.log(Vue)
        console.log('@@@ Hello')
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 自定指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时候
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时候
            inserted(element, binding){
                element.focus()
            },
            //指令被所在模版重新解析
            update(element, binding){
                element.value= binding.value
            }

        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        // Vue原型上添加方法
        Vue.prototype.hello = ()=>{alert('Hello')}
    }
}

