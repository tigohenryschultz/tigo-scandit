/**
 * router.js file used to specify all the routes in the mobile app
 */
import {createRouter, createWebHistory} from '@ionic/vue-router';

export function setupRouter() {

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        redirect: '/scandit',
      },
      {
        path: '/scandit',
        name: 'scandit',
        component: () => import(/* webpackChunkName: "TgScandit" */'@/views/scandit/TgScandit'),
      },

    ],

  });

  return router;
}
