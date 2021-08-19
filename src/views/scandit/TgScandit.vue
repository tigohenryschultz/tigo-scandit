<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>SCANDIT</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p style="text-align: center;">HELLO WORLD!</p>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonHeader,
    IonContent,
  } from '@ionic/vue';

  import {scanditCaptureCore} from 'scandit-capacitor-datacapture-core';

  export default {
    name: 'TgScandit',

    components: {
      IonButtons,
      IonContent,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
      IonHeader,
    },

    async created() {
      const scandit = await scanditCaptureCore.initializePlugins();
      console.log('scandit:', scandit);
    }
  }
</script>
