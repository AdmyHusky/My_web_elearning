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
          <v-dialog v-model="showLogin" persistent max-width="600px" ref="form">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text>
                <v-icon>mdi-login</v-icon>
                <span class="mr-2" style="margin-left: 5px;">Login</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Login</span>
              </v-card-title>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          prepend-icon="mdi-email"
                          :rules="emailRules"
                          v-model="emailuser"
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          prepend-icon="mdi-key"
                          label="Password*"
                          v-model="password"
                          :rules="passwordRules"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeLogin">Close</v-btn>
                <v-btn
                  color="blue darken-1"
                  :disabled="!valid"
                  text
                  @click="addUser"
                  type="is-success"
                >Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
                  <v-dialog v-model="showRegister" persistent max-width="600px" ref="form">
                    <template v-slot:activator="{ on }">
                      <div class="my-2">
                        <v-btn v-on="on" rounded color="#FFB300" dark x-large>Register</v-btn>
                      </div>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Register</span>
                      </v-card-title>
                      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  v-model="fname"
                                  :rules="nameRules"
                                  label="First name*"
                                  :counter="32"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                  v-model="lname"
                                  :rules="nameRules"
                                  label="Last name*"
                                  :counter="32"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  :rules="emailRules"
                                  v-model="emailuser"
                                  label="Email*"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Password*"
                                  v-model="password"
                                  :rules="passwordRules"
                                  type="password"
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Confirm Password*"
                                  v-model="confirmPassword"
                                  :rules="[confirmPasswordRules,passwordConfirmationRule]"
                                  type="password"
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
                                  v-model="sex"
                                  :items="['Male', 'Female','Other']"
                                  label="Sex"
                                  prepend-icon="mdi-gender-transgender"
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-form>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeRegister">Close</v-btn>
                        <v-btn
                          color="blue darken-1"
                          :disabled="!valid"
                          text
                          @click="addUser"
                          type="is-success"
                        >Save</v-btn>
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
// @ is an alias to /src
import { HTTP } from "@/axios.js";

export default {
  props: {
    source: String
  },
  data: vm => ({
    drawer: null,
    showLogin: false,
    showRegister: false,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    fname: "",
    lname: "",
    emailuser: "",
    password: "",
    confirmPassword: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(v) || "Password is required (a-z),(A-Z)",
      v => v.length > 7 || "Password must be more than 7 characters"
      ],
    confirmPasswordRules: [v => !!v || "Password is required"],
    sex: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 32 || "Name must be less than 32 characters"
    ]
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    async addUser() {
      if (this.$refs.form.validate()) {
        let obj = {
          fname: this.fname,
          lname: this.lname,
          emailuser: this.emailuser,
          password: this.password,
          birthday: this.date,
          sex: this.sex
        };

        await HTTP.post(`/users`, obj)
          .then(res => {
            console.log(res);
            this.showRegister = false;
          })
          .catch(error => {
            this.message = error;
            console.log(error);
          });
      }
    },
    closeRegister() {
      this.showRegister = false;
      this.$refs.form.reset();
    },
    closeLogin() {
      this.showLogin = false;
      this.$refs.form.reset();
    },
  }
};
</script>

<style scoped>
.bg {
  background-color: #78909c;
  height: 100%;
}
</style>
