<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MenuBar from "./components/MenuBar.vue";
</script>

<template>
  <v-app>
    <MenuBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    MenuBar,
  },

  computed: {},

  mounted() {},

  data() {
    return {};
  },
};
</script>
