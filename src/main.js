import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/components/variable/install.js'

Vue.config.productionTip = false

Promise.all([
    import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld.vue'),
    import(/* webpackChunkName: "HelloWorld2" */ './components/HelloWorld2.vue')
]).then(([module1, module2]) => {

    Vue.component(module1.default.name, module1.default)
    Vue.component(module2.default.name, module2.default)
    new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')   
})
