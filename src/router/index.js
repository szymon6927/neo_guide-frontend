import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Psalms from '../views/Psalms.vue';
import Contact from '../views/Contact.vue';
import Help from '../views/Help.vue';
import PsalmDetails from '../views/PsalmDetails.vue';
import NotFound from '../views/NotFound.vue';
import Login from '../views/auth/Login.vue';

import store from '../store';

import { TokenService } from '../services/token.service';

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
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            savedPosition,
          });
        }, 500);
      });
    }

    return {
      x: 0,
      y: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/about', '/contact', '/help'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !TokenService.isAuthenticated()) {
    store.dispatch('userModule/logout');
    next('/login');
  } else {
    next();
  }
});

router.afterEach(() => {
  if (store.state.isMobile) {
    store.dispatch('hideMenu', true);
  }
});

export default router;
