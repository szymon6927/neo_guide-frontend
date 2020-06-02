import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import PsalmsView from '../views/Psalms.vue';
import ContactView from '../views/Contact.vue';
import HelpView from '../views/Help.vue';
import PsalmDetailsView from '../views/PsalmDetails.vue';
import NotFoundView from '../views/NotFound.vue';
import LoginView from '../views/auth/Login.vue';
import ProfileView from '../views/Profile.vue';
import ChangePasswordView from '../views/auth/ChangePassword.vue';

import { TokenService } from '../services/token.service';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/psalms',
    name: 'psalms',
    component: PsalmsView,
  },
  {
    path: '/psalm/:psalmID/details',
    name: 'psalmDetails',
    component: PsalmDetailsView,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/change-password',
    name: 'changePassword',
    component: ChangePasswordView,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundView,
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
    next('/login');
  } else {
    next();
  }
});

export default router;
