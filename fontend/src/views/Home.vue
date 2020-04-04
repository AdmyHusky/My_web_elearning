<template>
  <v-app id="inspire">
    <!-- Menu Bar  -->
    <BarLogin />
    <!--image background -->
    <div class="row">
      <v-img id="image" alt="Wallpaper" :src="require('../assets/e-learning.jpg')" />
    </div>
    <div class="fill-height" fluid></div>
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
  height: 510px;
  width: 2000px;
  filter: blur(1px);
  filter: brightness(75%);
}
</style>
