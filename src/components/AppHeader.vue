<script setup>
import { ref } from 'vue'
import vibeCheckHeaderLogo from '../assets/vibe-check-logo-Photoroom.png'

const drawer = ref(false)
const menuItems = [
  { title: 'Inicio', href: '#hero' },
  { title: 'Servicios', href: '#services' },
  { title: 'Sobre Mí', href: '#about' },
  { title: 'Testimonios', href: '#testimonials' },
]
</script>

<template>
  <v-app-bar app fixed color="rgb(var(--v-theme-primary))" elevation="1" height="80">
    <v-container class="d-flex align-center py-0">
      <v-toolbar-title class="pa-0">
        <div class="d-flex align-center">
          <a href="#hero" class="text-decoration-none d-flex align-center" style="width: max-content;">
            <div :style="{ width: $vuetify.display.xs ? '75px' : '100px', cursor: 'pointer' }" @click="$vuetify.goTo('#hero')">
              <v-img 
                :src="vibeCheckHeaderLogo" 
                alt="Vibe Check Logo" 
              ></v-img>
            </div>
          </a>
          <div class="ml-2 ml-md-3 pl-2 pl-md-3" style="border-left: 1px solid rgba(255,255,255,0.3); line-height: 1.1;">
            <div class="text-white font-weight-light opacity-90" 
                 :style="{ 
                   fontSize: $vuetify.display.xs ? '10px' : '13px',
                   maxWidth: $vuetify.display.xs ? '150px' : '250px',
                   whiteSpace: 'normal'
                 }">
              Somos Vibe Check. Agencia de Marketing Digital y Social Media
            </div>
          </div>
        </div>
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
          color="white"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        class="d-md-none"
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>
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
