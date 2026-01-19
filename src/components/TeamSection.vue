<script setup>
import daniImage from '../assets/dani.png'
import moreImage from '../assets/more.jpg'
import ferImage from '../assets/fer.png'

const team = [
  {
    name: 'Dani',
    role: 'Community Manager & Ventas',
    description: 'Especialista en conectar con tu audiencia y cerrar ventas.',
    image: daniImage,
    color: 'secondary'
  },
  {
    name: 'More',
    role: 'Diseñadora Gráfica & Social Media Manager',
    description: 'Encargada de todo el área de creación y publicidad para que tu negocio llegue a más personas.',
    image: moreImage,
    color: 'primary'
  },
  {
    name: 'Fer',
    role: 'Gestión y Planificación',
    description: 'Asegura que cada paso de tu estrategia esté perfectamente orquestado.',
    image: ferImage,
    color: 'accent'
  }
]
</script>

<template>
  <section id="team" class="py-12 bg-grey-lighten-4">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="d-flex flex-column gap-4">
            <v-card
              v-for="(member, index) in team"
              :key="index"
              class="team-card d-flex flex-column flex-sm-row align-center pa-6 rounded-xl elevation-3"
              hover
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="avatar-wrapper mr-sm-8 mb-4 mb-sm-0">
                <v-avatar size="120" class="rounded-xl elevation-4">
                  <v-img :src="member.image" cover :alt="member.name"></v-img>
                </v-avatar>
              </div>
              
              <div class="text-center text-sm-left flex-grow-1">
                <h3 class="text-h4 font-weight-bold mb-1 text-primary">{{ member.name }}</h3>
                <span class="text-subtitle-1 font-weight-bold text-secondary d-block mb-3">{{ member.role }}</span>
                <p class="text-body-1 text-medium-emphasis">{{ member.description }}</p>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.gap-4 {
  gap: 1.5rem;
}

.team-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1) !important;
}

.avatar-wrapper {
  position: relative;
}

.avatar-wrapper::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 24px; /* Matches rounded-xl roughly */
  background: linear-gradient(45deg, var(--v-theme-primary), var(--v-theme-secondary));
  z-index: -1;
  opacity: 0.3;
  filter: blur(8px);
}
</style>
