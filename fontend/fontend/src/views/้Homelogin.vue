<template>
  <v-app id="inspire">
    <!-- Menu Bar  -->
    <BarLogin />
    <!--image background -->
    <div class="background">
      <v-img id="image" alt="Wallpaper" :src="require('../assets/e-learning.jpg')" />
    </div>
    <!-- Page content -->
    <v-content>
      <v-container class="fill-height" fluid>
    <!-- Course Section -->
        <v-row no-gutters>
          <v-col cols="12" sm="1">
            <h1>Course</h1>
          </v-col>
        </v-row>
    <!-- Course  -->  
     <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div> {{ card_text }} </div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import BarLogin from "@/components/BarLogin.vue";

export default {
  props: {
    source: String
  },
  components: {
    BarLogin
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
#image {
  height: 550px;
  width: 2000px;
  filter: blur(1px);
  filter: brightness(75%);
}
.content {
  max-width: 1564px;
}
</style>
