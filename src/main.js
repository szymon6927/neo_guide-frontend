import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import VuePageTransition from 'vue-page-transition';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/css/global.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAnalytics, {
  id: 'UA-122028664-3',
  router,
});
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
Vue.use(VuePageTransition);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
