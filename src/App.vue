<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>{{ mdiOpenInNew }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'App',
  components: {},
  props: {},
  data: () => ({
    mdiOpenInNew: mdiOpenInNew
  }),
  watch: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>
