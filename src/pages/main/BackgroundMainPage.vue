<template>
  <v-parallax
      style="height: 92vh"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Todo
        </h1>
        <h4 class="subheading">
          View tasks
        </h4>
        <v-btn class="mt-7" depressed  to="/tasks">
          <router-link class="text-decoration-none " to="/tasks">Tasks</router-link>
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
}
</script>

<style scoped>

</style>
