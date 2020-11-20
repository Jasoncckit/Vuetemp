<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>{{mdiHome}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>{{mdiContacts}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-main>
    <v-footer
      app
      color="indigo"
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiContacts, mdiHome } from '@mdi/js'

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    mdiHome: mdiHome,
    mdiContacts: mdiContacts
  })
}
</script>
