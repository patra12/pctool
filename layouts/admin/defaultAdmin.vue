<template>
  <v-app class="purple darken-2">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="black"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          color="#60bb23"
          exact
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="white--text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn @click.stop="miniVariant = !miniVariant" icon>
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn @click.stop="clipped = !clipped" icon>
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn @click.stop="fixed = !fixed" icon>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content class="brown lighten-4">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import '~/assets/admin.scss'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/admin/dashboard'
        },
        {
          icon: 'mdi-book-variant',
          title: 'Pages',
          to: '/admin/pages/'
        },
        {
          icon: 'mdi-drawing',
          title: 'Catagories',
          to: '/admin/category/'
        },
        {
          icon: 'mdi-package-variant-closed',
          title: 'Product',
          to: '/admin/product/'
        },
        {
          icon: 'mdi-account-multiple-outline',
          title: 'Users',
          to: '/admin/user'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Orders',
          to: '/admin/order'
        },
        {
          icon: 'mdi-settings',
          title: 'Settings',
          to: '/admin/settings'
        }
      ],
      miniVariant: false,
      title: 'PC - tools'
    }
  }
}
</script>
