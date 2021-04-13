import Vue from 'vue'

let requireComponents = []
const alternativeComponents = require.context('./components', false, /\.vue/);
alternativeComponents.keys().forEach(fileName => {
  // 组件实例
  const alternativeComponentName = alternativeComponents(fileName)
  requireComponents.push(alternativeComponentName)
})

debugger
let ctx = Promise;
requireComponents.forEach(reqComName => {
    let componentPromise = import(`/* webpackChunkName: "${reqComName}" */ ${reqComName}`)
    ctx = ctx.then(() => {
        return componentPromise.then(component => {
            Vue.component(reqComName, component.default || component)
        })
    })
})


const ctx = import(/* webpackChunkName: "HelloWorld" */ './HelloWorld.vue')
ctx.then(component=>{  
    return new Promise(){
        Vue.component("HelloWorld", component.default || component)
    }
}).then(()=> {
    console.log(213)
})
