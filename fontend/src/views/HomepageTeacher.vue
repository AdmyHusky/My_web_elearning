<template>
  <v-app id="inspire">
    <Barteacher/>
    <v-footer color="teal lighten-3" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Barteacher from "@/components/Barteacher.vue"

export default {
  components: {
    Barteacher
  },
  data: () => ({

  })
};
</script>
