import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Psalms from '../views/Psalms.vue';
import Contact from '../views/Contact.vue';
import Help from '../views/Help.vue';
import PsalmDetails from '../views/PsalmDetails.vue';
import NotFound from '../views/NotFound.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/psalms',
    name: 'psalms',
    component: Psalms,
  },
  {
    path: '/psalm/:psalmID/details',
    name: 'psalmDetails',
    component: PsalmDetails,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  if (store.state.isMobile) {
    store.commit('SET_HIDE_MENU', true);
  }
});

export default router;
