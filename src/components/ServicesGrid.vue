<script setup>
import brandingImage from '../assets/service-branding.jpg'
import contentImage from '../assets/service-content.jpg'
import webImage from '../assets/service-web.jpg'
import growthImage from '../assets/service-growth.png'

const services = [
  {
    title: 'Branding e Identidad Visual',
    description: 'Diseño de Logo, Pack de Plantillas Canva, Servicio Fotográfico Creaciones 360, Identidad de Marca.',
    image: brandingImage,
    cover: true
  },
  {
    title: 'Contenido y Social Media',
    description: 'Estrategia Digital, Automatizaciones para Redes Sociales, Edición de Videos, Diseño de Imágenes y Creativos.',
    image: contentImage,
    cover: true
  },
  {
    title: 'Desarrollo Web y E-commerce',
    description: 'Creación y mantenimiento de páginas Web, Creación de Landing Pages, E-commerce Especializado, Pagos Digitales.',
    image: webImage,
    cover: true
  },
  {
    title: 'Growth y Performance',
    description: 'Análisis del Embudo de Conversión, Email Marketing, Campañas Publicitarias.',
    image: growthImage,
    cover: false
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
          md="3"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <v-card
            class="h-100 pa-0 rounded-xl transition-swing overflow-hidden mt-4"
            elevation="2"
            hover
          >
            <v-img
              :src="service.image"
              height="300"
              :cover="service.cover"
              class="align-end bg-black"
            ></v-img>
            
            <div class="pa-6">
              <p class="text-body-2 text-medium-emphasis mb-0">{{ service.description }}</p>
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
