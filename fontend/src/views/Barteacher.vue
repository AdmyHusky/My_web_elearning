<template>
  <nav>
    <v-app-bar app color="teal lighten-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>English_Evening</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on="on" text>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn v-on="on" text>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="list in lists" :key="list.text" router :to="list.route">
          <v-list-item-icon>
            <v-icon>{{list.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{list.text}}</v-list-item-content>
        </v-list-item>

        <v-list-group prepend-icon="mdi-upload" value="true">
          <template v-slot:activator>
            <v-list-item-title>Upload</v-list-item-title>
          </template>
          <v-list-item v-for="upload in uploads" :key="upload.text" router :to="upload.route">
            <v-list-item-icon>
              <v-icon>{{upload.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-content>{{upload.text}}</v-list-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
     <v-footer color="teal lighten-3" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </nav>
</template>

<script>
export default {
  data() {
    return{
    drawer: null,
    lists: [
      { icon: "mdi-home", text: "Home", route: "/HomepageTeacher/Home" },
      { icon: "mdi-calendar", text: "Calendar", route: "/HomepageTeacher/Calendar" },
    ],
    uploads: [
      { icon: "mdi-file", text: "File", route: "/HomepageTeacher/Upfile" },
      { icon: "mdi-file-video", text: "Filevideo", route: "/HomepageTeacher/Upvideo" }
    ]
  }
}
};
</script>