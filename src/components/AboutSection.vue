<script setup>
import somosVibeCheckImage from '../assets/somos-vibe-check.png'
</script>

<template>
  <section id="about" class="py-16 bg-white">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="5" order="2" order-md="1" data-aos="fade-right">
          <v-img
            :src="somosVibeCheckImage"
            alt="Somos Vibe Check"
            class="rounded-xl elevation-6"
          ></v-img>
        </v-col>
        
        <v-col cols="12" md="6" order="1" order-md="2" data-aos="fade-left">
          <h2 class="text-h3 font-weight-bold mb-2 text-primary">Somos Vibe Check</h2>
          <h3 class="text-h5 font-weight-medium text-secondary mb-6">¿Tu negocio tiene buen Vibe?</h3>
          
          <p class="text-body-1 text-medium-emphasis mb-4">
            Hacemos completamente gratis el <strong>Vibe Check</strong> de tu negocio para saber qué tan bien está tu estado Digital.
          </p>
          <p class="text-body-1 text-medium-emphasis mb-6">
            ¿Quieres saber por qué no creces? ¿Quieres mejorar tus redes y no sabes por dónde? ¿O mejor aumentar tus ventas? Estás en el lugar indicado en Somos Vibe Check.
          </p>

        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.gap-3 {
  gap: 0.75rem;
}
</style>
