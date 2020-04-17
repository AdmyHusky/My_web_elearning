<template >
  <div class="bg">
    <v-container
      max-height="600"
      style="position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);"
    >
      <v-card class="overflow-hidden d-flex justify-center align-center">
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
            <v-icon>mdi-login</v-icon>
            <span class="mr-2" style="margin-left: 5px;">Login</span>
          </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="700">
          <v-content>
            <v-container fluid>
              <v-row align="center" justify="center">
                <v-col class="text-center">
                  <!-- wallpaper -->
                  <div>
                    <v-img
                      class="mt-6"
                      id="image"
                      alt="Wallpaper"
                      :src="require('../assets/wallpaper.jpg')"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <!-- button -->
              <v-row align="center">
                <v-col class="text-center">
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                      <div class="my-2">
                        <v-btn v-on="on" rounded color="#FFB300" dark x-large>Sign in</v-btn>
                      </div>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">SIGN IN</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field label="First name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field label="Last name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Confirm Password*"
                                type="confirm_password"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="dateFormatted"
                                    label="Date"
                                    hint="MM/DD/YYYY format"
                                    persistent-hint
                                    prepend-icon="mdi-calendar"
                                    @blur="date = parseDate(dateFormatted)"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-autocomplete
                                :items="['Male', 'Female','Other']"
                                label="Sex"
                                prepend-icon="mdi-gender-transgender"
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
                </v-col>
              </v-row>
            </v-container>
          </v-content>
        </v-sheet>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: vm => ({
    drawer: null,
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    testhome() {
      this.$router.push("/testhome");
    },
    ShowLoginWithFacebook() {
      this.showLogin = true;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #78909c;
  height: 100%;
}
</style>
