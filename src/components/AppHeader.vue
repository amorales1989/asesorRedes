<script setup>
import { ref } from 'vue'
import vibeCheckHeaderLogo from '../assets/vibe-check-header-logo.png'

const drawer = ref(false)
const menuItems = [
  { title: 'Inicio', href: '#hero' },
  { title: 'Servicios', href: '#services' },
  { title: 'Sobre Mí', href: '#about' },
  { title: 'Testimonios', href: '#testimonials' },
]
</script>

<template>
  <v-app-bar app color="white" elevation="1" height="80" class="px-4">
    <div class="d-flex align-center w-100 container">
      <v-toolbar-title class="font-weight-bold text-h5" style="cursor: pointer" @click="$vuetify.goTo('#hero')">
        <a href="#hero" class="text-decoration-none align-center">
          <v-img :src="vibeCheckHeaderLogo" alt="Vibe Check Logo" width="150" style="margin-top: -50px;"></v-img>
        </a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex align-center gap-4">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :href="item.href"
          variant="text"
          class="text-capitalize font-weight-medium"
          color="grey-darken-3"
        >
          {{ item.title }}
        </v-btn>
        
      
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :href="item.href"
        :title="item.title"
        @click="drawer = false"
      ></v-list-item>
      <v-list-item class="mt-4">
        
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.gap-4 {
  gap: 1rem;
}
.text-primary {
  color: #0F172A !important;
}
.text-secondary {
  color: #8B5CF6 !important;
}
</style>
