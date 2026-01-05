<script setup>
import auditImage from '../assets/audit-image.png'
const services = [
  {
    title: 'Auditoría de Perfil',
    description: 'Análisis profundo de tu cuenta actual. Identificamos errores, oportunidades de mejora y optimizamos tu biografía y feed.',
    icon: 'mdi-magnify',
    color: 'blue-grey',
    price: 'Desde $97',
    image: auditImage
  },
  {
    title: 'Estrategia de Contenidos',
    description: 'Plan de acción personalizado por 3 meses. Calendario editorial, pilares de contenido y guiones para Reels virales.',
    icon: 'mdi-chart-timeline-variant',
    color: 'deep-purple',
    price: 'Desde $297',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Mentoría 1:1',
    description: 'Acompañamiento exclusivo durante 6 semanas. Reuniones semanales, soporte por WhatsApp y acceso a mi red de contactos.',
    icon: 'mdi-star',
    color: 'amber',
    price: 'Consultar',
    highlight: true,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop'
  }
]
</script>

<template>
  <section id="services" class="py-16 bg-grey-lighten-5">
    <v-container>
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold mb-2 text-primary">Mis Servicios</h2>
        <p class="text-subtitle-1 text-medium-emphasis">Soluciones diseñadas para escalar tu presencia digital</p>
      </div>

      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <v-card
            class="h-100 pa-6 rounded-xl transition-swing overflow-visible mt-4"
            :elevation="service.highlight ? 8 : 2"
            :class="{ 'highlight-border': service.highlight }"
            hover
          >
            <v-img
              :src="service.image"
              height="200"
              cover
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="text-white font-weight-bold" v-if="false"></v-card-title>
            </v-img>
            
            <div v-if="service.highlight" class="popular-tag bg-secondary">Más Popular</div>
            
            <h3 class="text-h5 font-weight-bold mb-3 mt-6">{{ service.title }}</h3>
            <p class="text-body-1 text-medium-emphasis mb-6">{{ service.description }}</p>

            <div class="mt-auto pt-4 d-flex align-center justify-space-between border-t">
              <span class="text-h6 font-weight-bold text-primary">{{ service.price }}</span>
              <v-btn
                variant="text"
                color="secondary"
                append-icon="mdi-arrow-right"
                href="https://wa.me/1234567890?text=Hola,%20quiero%20más%20información%20sobre%20tus%20servicios"
                target="_blank"
              >
                Saber más
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.highlight-border {
  border: 2px solid #8B5CF6;
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.border-t {
  border-top: 1px solid rgba(0,0,0,0.05);
}
</style>
