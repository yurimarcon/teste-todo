<template>
  <div class="alert-notification">
    <v-alert
      :text="alertStore.text"
      :type="alertStore.type"
      closable
      class="animate__animated animate__bounce"
    ></v-alert>
  </div>
</template>

<script setup>
import 'animate.css'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();

</script>

<style scoped>
    .alert-notification {
        /* display: none; */
        position:fixed;
        z-index: 100;
        bottom: 50px;
        width: 100%;
        padding: 0 40% 0 35%;
    }
</style>