<template>
  <div>
    <v-app-bar app>
      <router-link :to="{ name: 'tutorials' }">
        <v-img
          class="mx-2"
          :src="logoURL"
          height="50"
          width="50"
          contain
        ></v-img>
      </router-link>
      <v-toolbar-title class="title">
        {{ this.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user != null">
        <v-btn class="mx-2" :to="{ name: 'tutorials' }"> List </v-btn>
        <v-btn class="mx-2" :to="{ name: 'add' }"> Add Tutorial </v-btn>
      </div>
      <v-menu bottom min-width="200px" rounded offset-y v-if="user != null">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon x-large>
            <v-avatar v-if="user != null" color="secondary">
              <span class="accent--text font-weight-bold">{{ initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="secondary" class="mt-2 mb-2">
                <span class="accent--text font-weight-bold">{{
                  initials
                }}</span>
              </v-avatar>
              <h3>{{ name }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout()"> Logout </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import ocLogo from "/oc-logo-white.png";
import Utils from "../config/utils";
import AuthServices from "../services/authServices";

export default {
  name: "App",
  components: {
    ocLogo,
  },
  data: () => ({
    user: {},
    title: "Tutorials",
    initials: "",
    name: "",
    logoURL: "",
  }),
  async created() {
    this.logoURL = ocLogo;
    this.resetMenu();
  },
  async mounted() {
    this.resetMenu();
  },
  computed: {
    // _link() {
    //     return "/" + this.selectedRoles.toLowerCase() + "Home/" + this.currentPersonRoleID;
    // }
  },
  methods: {
    resetMenu() {
      this.user = null;
      // ensures that their name gets set properly from store
      this.user = Utils.getStore("user");
      if (this.user != null) {
        this.initials = this.user.fName[0] + this.user.lName[0];
        this.name = this.user.fName + " " + this.user.lName;
      }
    },
    logout() {
      AuthServices.logoutUser(this.user)
        .then((response) => {
          console.log(response);
          Utils.removeItem("user");
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
