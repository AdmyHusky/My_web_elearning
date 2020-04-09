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
      <v-content>
        <v-container style="height: 750px;" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <!-- wallpaper -->
              <template>
                <v-img id="image" alt="Wallpaper" :src="require('../assets/wallpaper.jpg')" />
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
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
</style>
