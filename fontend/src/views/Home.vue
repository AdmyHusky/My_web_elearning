<template>
  <v-card class="overflow-hidden">
    <!-- bar -->
    <v-app-bar
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <v-toolbar-title>English_Evening</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2" style="margin-left: 5px;">Login</span>
      </v-btn>

      <v-btn text>
        <span class="mr-2">Sign in</span>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="600">
      <v-span style="height: 1000px;">
        <!-- wallpaper -->
        <div id="bg" v-mousefollower></div>
      </v-span>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    testhome() {
      this.$router.push("/testhome");
    }
  }
};
</script>

<style scoped>
#bg{
  max-width: 100%;
  height: 1000px;
  background: url(https://cdn.vuetifyjs.com/images/cards/desert.jpg);
}
</style>
