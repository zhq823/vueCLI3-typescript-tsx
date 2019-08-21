import Vue from 'vue';
import Router from 'vue-router';
import NavSideLayout from '@/layout/NavSideLayout';
import EmptyLayout from '@/layout/EmptyLayout';
import Home from '@/views/Home';
import Login from '@/views/Login';
import ContractBoard from '@/views/Boards/ContractBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: NavSideLayout,
      children: [
        {
          path: '',
          component: Home,
          redirect: '/contract-board'
        },
        {
          path: '/contract-board',
          component: ContractBoard
        }
      ]
    },
    {
      path: '/login',
      component: EmptyLayout,
      children: [
        {
          path: '',
          component: Login
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
