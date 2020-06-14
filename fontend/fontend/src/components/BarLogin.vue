<template>
  <v-app-bar app color="cyan" dark>
    <v-toolbar-title class="mr-2" style="margin-left: 5px;">English_Evening</v-toolbar-title>
    <v-spacer />
    <v-btn text>
      <v-icon>mdi-login</v-icon>
      <span class="mr-2" style="margin-left: 5px;">Sign in</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "BarLogin",
  props: {
    msg: String
  }
};
</script>