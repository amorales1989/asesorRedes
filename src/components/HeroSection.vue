<script setup>
import heroImage from '../assets/hero-image.png'
</script>

<template>
  <section id="hero" class="hero-section position-relative">
    <v-container class="fill-height py-16">
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6" data-aos="fade-right">
          <h1 class="text-h2 font-weight-black mb-4 text-primary lh-1">
            Transforma tus Redes Sociales en un 
            <span class="text-gradient">Negocio Rentable</span>
          </h1>
          <p class="text-h6 text-medium-emphasis mb-8" style="max-width: 600px; line-height: 1.6;">
            Te ayudo a construir una marca personal sólida, atraer a tu audiencia ideal y monetizar tu contenido con estrategias probadas.
          </p>
          
          <div class="d-flex flex-wrap gap-4 mb-12">
            <v-btn
              href="https://wa.me/1234567890?text=Hola,%20quiero%20reservar%20una%20auditoría"
              target="_blank"
              color="primary"
              size="x-large"
              elevation="4"
              rounded="lg"
              class="text-capitalize font-weight-bold px-8"
            >
              Empieza Ahora
            </v-btn>
            <v-btn
              href="#services"
              variant="outlined"
              color="primary"
              size="x-large"
              rounded="lg"
              class="text-capitalize font-weight-bold px-8"
            >
              Ver Servicios
            </v-btn>
          </div>
          
         
        </v-col>
        
        <v-col cols="12" md="5" class="position-relative" data-aos="fade-left" data-aos-delay="200">
          <div class="image-container">
            <div class="abstract-bg"></div>
            <v-img
              :src="heroImage"
              alt="Mentor de Redes Sociales"
              cover
              class="hero-img rounded-xl elevation-10"
              aspect-ratio="0.85"
            ></v-img>
            
            <!-- Floating Social Icons -->
            <v-card class="floating-icon icon-facebook" elevation="4">
              <v-icon icon="mdi-facebook" color="blue" size="32"></v-icon>
            </v-card>
            <v-card class="floating-icon icon-whatsapp" elevation="4">
              <v-icon icon="mdi-whatsapp" color="green" size="32"></v-icon>
            </v-card>
            <v-card class="floating-icon icon-instagram" elevation="4">
              <v-icon icon="mdi-instagram" color="purple" size="32"></v-icon>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.text-gradient {
  background: linear-gradient(135deg, #0F172A 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.border-t { border-top: 1px solid rgba(0,0,0,0.1); }
.lh-1 { line-height: 1.1; }

.image-container {
  position: relative;
  z-index: 1;
}

.abstract-bg {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  z-index: -1;
}

.floating-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
}

.icon-facebook {
  top: 10%;
  left: -30px;
  animation-delay: 0s;
}

.icon-whatsapp {
  bottom: 20%;
  right: -20px;
  animation-delay: 2s;
}

.icon-instagram {
  top: 40%;
  right: -40px;
  animation-delay: 4s;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
</style>
