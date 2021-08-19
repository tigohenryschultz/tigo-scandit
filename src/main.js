import '@/global.scss'
import {createApp} from 'vue';
import App from '@/App';
import {setupRouter} from '@/router';
import {IonicVue} from '@ionic/vue';

const router = setupRouter();
const app    = createApp(App);
app.use(IonicVue, {
  mode: 'md',
  popoverLeave: false
});
app.use(router);

router.isReady()
  .then(() => {
      app.mount('#app');
    }
  );