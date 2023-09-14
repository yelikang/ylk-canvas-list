import Vue from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(antd)
Vue.use(Dui)
window._ = _
Vue.config.devtools = true
new Vue({
    render: (h) => h(App)
}).$mount('#app')
