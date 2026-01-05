<script setup>
import aboutImage from '../assets/about-image.png'
</script>

<template>
  <section id="about" class="py-16 bg-white">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="5" order="2" order-md="1" data-aos="fade-right">
          <v-img
            :src="aboutImage"
            alt="Sobre Mí"
            cover
            class="rounded-xl elevation-6"
            aspect-ratio="0.8"
          ></v-img>
        </v-col>
        
        <v-col cols="12" md="6" order="1" order-md="2" data-aos="fade-left">
          <h2 class="text-h3 font-weight-bold mb-2 text-primary">Hola, soy Fernando</h2>
          <h3 class="text-h5 font-weight-medium text-secondary mb-6">Tu estratega digital de confianza</h3>
          
          <p class="text-body-1 text-medium-emphasis mb-4">
            Llevo más de 5 años ayudando a emprendedores y marcas personales a encontrar su voz en el ruido digital. Mi filosofía no se basa en trucos virales pasajeros, sino en construir comunidades reales y comprometidas.
          </p>
          <p class="text-body-1 text-medium-emphasis mb-8">
            He trabajado con más de 50 marcas, logrando no solo aumentar sus seguidores, sino multiplicar sus ventas a través de Instagram y TikTok.
          </p>
          
          <div class="d-flex flex-column gap-3">
            <div class="d-flex align-center">
              <v-icon icon="mdi-check-circle" color="secondary" class="mr-3"></v-icon>
              <span class="font-weight-bold">Estrategias Personalizadas</span>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-check-circle" color="secondary" class="mr-3"></v-icon>
              <span class="font-weight-bold">Enfoque en Rentabilidad</span>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-check-circle" color="secondary" class="mr-3"></v-icon>
              <span class="font-weight-bold">Soporte Continuo</span>
            </div>
          </div>
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
