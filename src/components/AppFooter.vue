<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer color="primary" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="mb-8 mb-md-0">
          <h3 class="text-h5 font-weight-bold mb-4">
            Asesor<span class="text-secondary">Social</span>
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
            <a href="#about" class="footer-link">Sobre Mí</a>
            <a href="#testimonials" class="footer-link">Testimonios</a>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <h4 class="text-h6 font-weight-bold mb-4">Contacto</h4>
          <div class="d-flex flex-column gap-3 mb-6">
            <div class="d-flex align-center">
              <v-icon icon="mdi-email" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="mailto:hola@mentorsocial.com" class="footer-link">hola@mentorsocial.com</a>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-instagram" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="#" class="footer-link">@mentorsocial</a>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-linkedin" size="small" class="mr-2 text-grey-lighten-1"></v-icon>
              <a href="#" class="footer-link">Fernando Mentor</a>
            </div>
          </div>
          <v-btn
            href="mailto:hola@mentorsocial.com"
            color="secondary"
            variant="flat"
            rounded="lg"
            class="text-capitalize font-weight-bold"
          >
            Escríbeme
          </v-btn>
        </v-col>
      </v-row>
      
      <v-divider class="my-8 border-opacity-25"></v-divider>
      
      <div class="text-center text-body-2 text-grey-lighten-2">
        &copy; {{ currentYear }} MentorSocial. Todos los derechos reservados.
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
