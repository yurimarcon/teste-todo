<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img src="https://picsum.photos/1920/1080?random" height="80" cover
             gradient="to top right, rgba(19, 84, 122, 0.8), rgba(128, 208, 199, 0.8)">
      <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                     title="John Doe"
                     subtitle="john.doe@google.com">
        </v-list-item>
      </v-list>
      </v-img>
      <v-app-bar >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-divider></v-divider>
      <v-list>
        <router-link v-for="(item,i) in items" :key="i" :to="item.path">
          <v-list-item :prepend-icon="item.icon">
            <v-list-item-title @click="drawer=false">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="teal-darken-4" height="80"
        image="https://picsum.photos/1920/1080?random" density="prominent">
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
  const items = [
    { title: 'Home', path: '/', icon: 'mdi-home' },
    { title: 'About', path: '/about', icon: 'mdi-help' },
  ]
</script>

<script>
  export default {
    data: () => ({ drawer: true }),
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
  