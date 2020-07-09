 <template>
  <div>
    <v-container class="my-5">
      <h1>Course</h1>
      <v-layout row wrap class="my-3">
        <v-flex xs12 sm6 md4 lg3 v-for="subject in courses" :key="subject.course_name">
          <v-card class="ma-2" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://picsum.photos/id/1/200/300"
            >
              <v-card-title>{{subject.course_name}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{subject.course_id}}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn bottom color="orange" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="teal lighten-3">Create course</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col cols="12">
              <v-text-field placeholder="Course name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field type="tel" placeholder="Course description"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="Level"
                :items="['1', '2','3','4','5','6','7','8','9','10']"
                label="Level"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AuthService from "@/services/TeacherService.js";

export default {
  data() {
    return {
      courses: [],
      dialog: false
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.courses = await AuthService.course();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>