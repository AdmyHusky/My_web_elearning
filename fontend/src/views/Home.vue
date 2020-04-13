<template>
  <v-container max-height="600">
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
        <!-- Login Button -->
            <v-btn v-on="on" text>
              <span class="mr-2" style="margin-left: 5px;">Login</span>
            </v-btn>
        <!-- wallpaper Button -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              <span class="mr-2" style="margin-left: 5px;">Sign in</span>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="600">
        <v-content id="wallpaper">
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <!-- wallpaper -->
                <div>
                  <v-img id="image" alt="Wallpaper" :src="require('../assets/wallpaper.jpg')" />
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <!-- button -->
            <v-row align="center">
              <v-col class="text-center">
                <div class="my-2">
                  <v-btn rounded color="#FFB300" dark x-large>Welcome</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    dialog: false
  }),
  methods: {
    testhome() {
      this.$router.push("/testhome");
    },
    ShowLoginWithFacebook() {
      this.showLogin = true;
    }
  }
};
</script>

<style scoped>
</style>
