 <template>
  <v-container>
    <h1>Upload File</h1>
    <v-layout row  wrap class="my-3">
      <v-flex md 12>
        <v-file-input
          v-model="files"
          color="deep-purple accent-4"
          counter
          label="File input"
          multiple
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >+{{ files.length - 2 }} File(s)</span>
          </template>
        </v-file-input>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    files: []
  })
};
</script>