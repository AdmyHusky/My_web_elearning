<template>
  <v-app>
    <Barteacher/>
    <v-content style="margin-left: -5%;">
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from '../views/Home.vue'
import Barteacher from "./Barteacher"
import Upfile from "./Upfile"
import Upvideo from "./Upvideo"
import Calendar from "./Calendar"

export default {
  components: {
    Barteacher,Upfile,Upvideo,Calendar
  },
  data: () => ({

  })
};
</script>
