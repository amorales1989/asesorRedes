<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer color="primary" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="mb-8 mb-md-0">
          <h3 class="text-h5 font-weight-bold mb-4">
            <span class="text-secondary">Vibe Check</span>
          </h3>
          <p class="text-body-2 text-grey-lighten-1 mb-6" style="max-width: 300px;">
            Ayudando a marcas y creadores a destacar en el mundo digital con estrategias reales y resultados medibles.
          </p>
        </v-col>
        
        <v-col cols="12" md="3" class="mb-8 mb-md-0">
          <h4 class="text-h6 font-weight-bold mb-4">Enlaces Rápidos</h4>
          <div class="d-flex flex-column gap-2">
            <a href="#hero" class="footer-link">Inicio</a>
            <a href="#services" class="footer-link">Servicios</a>
            <a href="#about" class="footer-link">Somos Vibe Check</a>
            <a href="#testimonials" class="footer-link">Testimonios</a>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <h4 class="text-h6 font-weight-bold mb-4">Contacto</h4>
          <div class="d-flex flex-column gap-3 mb-6">
            <div class="d-flex align-center">
              <v-icon icon="mdi-email" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="mailto:somos.vibe.check@gmail.com " class="footer-link">somos.vibe.check@gmail.com </a>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-instagram" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="https://instagram.com/somos.vibe.check" target="_blank" class="footer-link">@somos.vibe.check</a>
            </div>
            <div class="d-flex align-center">
              <v-icon size="small" class="mr-2 text-grey-lighten-1">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
              </v-icon>
              <a href="https://tiktok.com/@somos.vibe.check" target="_blank" class="footer-link">@somos.vibe.check</a>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-linkedin" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="https://linkedin.com/company/somos-vibe-check" target="_blank" class="footer-link">Somos Vibe Check</a>
            </div>
          </div>
          
        </v-col>
      </v-row>
      
      <v-divider class="my-8 border-opacity-25"></v-divider>
      
      <div class="text-center text-body-2 text-grey-lighten-2">
        &copy; {{ currentYear }} Vibe Check. Todos los derechos reservados.
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.text-secondary {
  color: #8B5CF6 !important;
}

.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }

.footer-link {
  color: #E2E8F0;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
}
</style>
