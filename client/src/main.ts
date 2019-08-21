import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import '@babel/polyfill';
import '@/plugins/ant-design-vue';
import './styles.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
