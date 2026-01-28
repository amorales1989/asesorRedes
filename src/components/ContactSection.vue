<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import instagramIcon from '../assets/icon-instagram.png'
import tiktokIcon from '../assets/icon-tiktok.png'
import linkedinIcon from '../assets/icon-linkedin.png'

const valid = ref(false)
const loading = ref(false)
const snackbar = ref({
  show: false,
  text: '',
  color: ''
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  question: ''
})

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@somos.vibe.check',
    url: 'https://instagram.com/somos.vibe.check',
    image: instagramIcon
  },
  {
    name: 'TikTok',
    handle: '@somos.vibe.check',
    url: 'https://tiktok.com/@somos.vibe.check',
    image: tiktokIcon
  },
  {
    name: 'LinkedIn',
    handle: 'Somos Vibe Check',
    url: 'https://linkedin.com/company/somos-vibe-check',
    image: linkedinIcon
  },
  {
    name: 'Email',
    handle: 'somos.vibe.check@gmail.com',
    url: 'mailto:somos.vibe.check@gmail.com',
    icon: 'mdi-email',
    color: 'red'
  }
]

const submitForm = async () => {
  if (!valid.value) return

  loading.value = true
  
  try {
    const templateParams = {
      from_name: form.value.name,
      reply_to: form.value.email,
      phone: form.value.phone || 'No proporcionado',
      message: form.value.question,
      to_name: 'Vibe Check Team'
    }

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    snackbar.value = {
      show: true,
      text: '¡Mensaje enviado con éxito! Nos contactaremos pronto.',
      color: 'success'
    }
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      question: ''
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    snackbar.value = {
      show: true,
      text: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
      color: 'error'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-16 bg-grey-lighten-4">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="rounded-xl overflow-hidden elevation-4">
            <v-row no-gutters>
              <!-- Contact Form Column -->
              <v-col cols="12" md="7" class="pa-8 bg-white">
                <h2 class="text-h4 font-weight-bold mb-2 text-primary">Hablemos</h2>
                <p class="text-body-1 text-medium-emphasis mb-8">Déjanos tus datos y te contactaremos para potenciar tu marca.</p>
                
                <v-form v-model="valid" @submit.prevent="submitForm">
                  <v-text-field
                    v-model="form.name"
                    label="Nombre y Apellido"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                    required
                    :disabled="loading"
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.email"
                    label="Correo Electrónico"
                    type="email"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                    required
                    :disabled="loading"
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.phone"
                    label="Número de Teléfono"
                    type="tel"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                    :disabled="loading"
                  ></v-text-field>
                  
                  <v-textarea
                    v-model="form.question"
                    label="¿Qué te gustaría mejorar actualmente de tus redes?"
                    variant="outlined"
                    density="comfortable"
                    rows="3"
                    class="mb-6"
                    :disabled="loading"
                  ></v-textarea>
                  
                  <v-btn
                    type="submit"
                    color="secondary"
                    block
                    size="large"
                    class="text-none font-weight-bold rounded-lg"
                    :disabled="!valid || loading"
                    :loading="loading"
                  >
                    Enviar Mensaje
                  </v-btn>
                </v-form>
              </v-col>
              
              <!-- Contact Info Column -->
              <v-col cols="12" md="5" class="bg-primary pa-8 d-flex flex-column justify-center position-relative overflow-hidden">
                <div class="background-pattern"></div>
                
                <div class="position-relative z-index-1">
                  <h3 class="text-h5 font-weight-bold mb-6 text-white">Conecta con nosotros</h3>
                  
                  <div class="d-flex flex-column gap-6">
                    <a
                      v-for="(link, index) in socialLinks"
                      :key="index"
                      :href="link.url"
                      target="_blank"
                      class="d-flex align-center text-decoration-none text-white social-link"
                    >
                      <v-avatar size="40" class="mr-4 elevation-2 bg-white">
                        <v-img v-if="link.image" :src="link.image" alt="icon"></v-img>
                        <v-icon v-else :icon="link.icon" :color="link.color" size="24"></v-icon>
                      </v-avatar>
                      <div>
                        <span class="text-subtitle-2 font-weight-bold d-block">{{ link.name }}</span>
                        <span class="text-caption opacity-80">{{ link.handle }}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="5000"
      elevation="24"
    >
      {{ snackbar.text }}
      
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
.gap-6 {
  gap: 1.5rem;
}

.social-link {
  transition: transform 0.2s ease;
}

.social-link:hover {
  transform: translateX(5px);
}

.opacity-80 {
  opacity: 0.8;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: 0;
}

.z-index-1 {
  z-index: 1;
}
</style>
