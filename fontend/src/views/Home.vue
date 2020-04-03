<template>

  <v-app id="inspire">
    <!-- Top  -->
    <BarLogin />
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
