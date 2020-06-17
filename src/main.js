import Vue from 'vue'
import App from './App.vue'
import MarkdownMixin from '@/mixins/MarkdownMixin'

Vue.mixin(MarkdownMixin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
