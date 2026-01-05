<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesGrid from './components/ServicesGrid.vue'
import AboutSection from './components/AboutSection.vue'
import Testimonials from './components/Testimonials.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <v-app class="app-wrapper">
    <div class="background-pattern"></div>
    <AppHeader />
    <v-main>
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <Testimonials />
    </v-main>
    <AppFooter />
    
    <!-- Global WhatsApp Button -->
    <v-btn
      href="https://wa.me/1234567890?text=Hola,%20quiero%20reservar%20una%20auditoría"
      target="_blank"
      icon="mdi-whatsapp"
      color="green-darken-1"
      size="x-large"
      elevation="8"
      position="fixed"
      location="bottom right"
      class="ma-6 z-index-1000"
      style="z-index: 1000;"
    ></v-btn>
  </v-app>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.background-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/social-pattern.png');
  background-repeat: repeat;
  background-size: 400px;
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
}
</style>
