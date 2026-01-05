<script setup>
const testimonials = [
  {
    name: 'Sofía Martínez',
    role: 'Emprendedora de Moda',
    text: 'Gracias a la mentoría, mi tienda online pasó de 200 a 5000 visitas mensuales en solo 3 meses. La estrategia de Reels fue clave.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Coach Fitness',
    text: 'Fernando tiene una visión increíble. Me ayudó a estructurar mi oferta y ahora cierro clientes high-ticket directamente por DM.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Laura Gómez',
    role: 'Creadora de Contenido',
    text: 'La auditoría de perfil me abrió los ojos. Pequeños cambios hicieron una gran diferencia en mi engagement. ¡Totalmente recomendado!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]
</script>

<template>
  <section id="testimonials" class="py-16">
    <v-container>
      <h2 class="text-h3 font-weight-bold text-center mb-16 text-primary" data-aos="fade-up">Lo que dicen mis clientes</h2>
      
      <v-row>
        <v-col
          v-for="(item, index) in testimonials"
          :key="index"
          cols="12"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <v-card class="h-100 pa-6 rounded-xl" elevation="2">
            <v-icon icon="mdi-format-quote-open" color="secondary" size="48" class="opacity-20 mb-4"></v-icon>
            
            <p class="text-body-1 font-italic mb-6" style="min-height: 80px;">"{{ item.text }}"</p>
            
            <div class="d-flex align-center">
              <v-avatar size="48" class="mr-4">
                <v-img :src="item.image" :alt="item.name" cover></v-img>
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-bold">{{ item.name }}</div>
                <div class="text-caption text-medium-emphasis">{{ item.role }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.opacity-20 {
  opacity: 0.2;
}
</style>
