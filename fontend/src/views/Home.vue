<template>
  <v-app id="inspire">
    <!-- Top  -->
    <v-app-bar app color="cyan" dark>
      <v-toolbar-title class="mr-2" style="margin-left: 5px;">English_Evening</v-toolbar-title>
      <v-spacer />
      <v-btn text>
        <v-icon>mdi-login</v-icon>
        <span class="mr-2" style="margin-left: 5px;">Sign in</span>
      </v-btn>
    </v-app-bar>
    <!--Center -->
      <div class="fill-height" fluid>
        <div class="row">
            <v-img
              alt="Wallpaper"
              contain
              :src="require('../assets/e-learning.jpg')"
              transition="scale-transition"
            />
        </div>
      </div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
