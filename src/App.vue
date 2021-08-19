<template>
  <ion-app>
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
  import {IonApp, IonRouterOutlet} from '@ionic/vue';
  import {Plugins} from '@capacitor/core';

  const {SplashScreen} = Plugins;

  export default {
    name: 'app',

    components: {
      IonApp,
      IonRouterOutlet,
    },

    ionViewDidEnter() {
      console.log('App: ionViewDidEnter');
      SplashScreen.hide();
    }

  };
</script>
