<script setup>
import { ref } from 'vue'

const tab = ref('business')

const categories = [
  { value: 'business', label: 'Vibe Business' },
  { value: 'sport', label: 'Vibe Sport' },
  { value: 'social', label: 'Vibe Social & Branding' }
]

const testimonials = {
  business: [
    {
      name: '@guti24hr',
      role: 'Kioscos',
      text: '"Trabajar con @somos.vibe.check nos abrió los ojos sobre el potencial de nuestro negocio. Gracias al estudio de mercado y la definición de nuestro cliente ideal (buyer persona), hoy en @guti24hr sabemos exactamente cómo hablarle a nuestra audiencia. La propuesta integral de marketing que diseñaron profesionalizó nuestras redes y nos dio una hoja de ruta clara para crecer." — Dueño de @guti24hr',
      color: 'blue'
    },
    {
      name: '@gabbamia',
      role: 'Rubro decoración',
      text: '"Antes de trabajar con @somos.vibe.check, me costaba mucho mostrar la variedad de plantas que tenemos en @gabbamia de forma organizada. El equipo no solo posicionó mi marca con una estética fresca y natural, sino que los catálogos de productos que diseñaron facilitaron muchísimo la compra para mis clientes. Ahora todo se ve profesional y en armonía con la esencia de mi negocio." — Dueña de @gabbamia',
      color: 'green'
    },
    {
      name: '@Errante.Cafe',
      role: 'Venta de Cafe',
      text: '"Teníamos una esencia, pero nos faltaba esa identidad profesional que te hace destacar en la calle y en las redes. El equipo de @somos.vibe.check realizó la modificación de nuestro logo logrando un equilibrio perfecto entre lo clásico y lo moderno. Nuestras nuevas tarjetas de presentación son el comentario obligado de cada cliente. ¡Lograron que @Errante.Cafe se vea tan bien como sabe!" — Equipo de Errante Café',
      color: 'brown'
    },
    {
      name: '@Tatto.fe',
      role: 'Tatuajes',
      text: '"En el mundo del tatuaje es difícil resaltar, pero con la estrategia de @somos.vibe.check logramos posicionar a @Tatto.fe en el radar. La combinación de una identidad visual única y una publicidad bien segmentada hizo que la agenda empezara a moverse mucho más rápido. Son expertos en encontrar la \'vibe\' exacta que conecta con la gente."',
      color: 'grey-darken-3'
    }
  ],
  sport: [
    {
      name: '@ascar.oficial',
      role: 'Torneos deportivos',
      text: '"Buscábamos dar un salto de calidad en la difusión de @ascar.oficial y con @somos.vibe.check lo logramos. La producción de Reels enfocada en el crecimiento transformó nuestra identidad digital, llevándonos a audiencias que antes no alcanzábamos. Lograron captar la adrenalina del torneo con una edición profesional que nos posicionó como referentes en el rubro deportivo." — Dirección de Ascar Oficial',
      color: 'orange'
    },
    {
      name: '@torneos.3g',
      role: 'Torneos deportivos',
      text: '"Organizar torneos es un desafío, pero comunicarlos es otro nivel. Gracias a @somos.vibe.check, @torneos.3g hoy tiene una presencia digital vibrante. Sus reels captan la emoción de cada partido y la atención constante que brindan a nuestra comunidad en redes ha profesionalizado muchísimo el trato con los equipos. Son el jugador estrella de nuestra comunicación." — Organización de Torneos 3G',
      color: 'red'
    },
    {
      name: '@Rodrikdud',
      role: 'Fotógrafos',
      text: '"Como fotógrafo, mi enfoque siempre estuvo en la imagen, pero me faltaba una estrategia para convertir mi pasión en una marca personal sólida. @somos.vibe.check entendió el valor de mi mirada en el deporte y me ayudó a organizar mi contenido de forma estratégica. Ahora, @Rodrikdud no solo muestra fotos, sino que transmite profesionalismo y autoridad en cada posteo. ¡Lograron que mi marca personal esté al nivel de mis capturas!" — @Rodrikdud',
      color: 'indigo'
    }
  ],
  social: [
    {
      name: '@Ojos de Papel',
      role: 'Agrupación de mujeres',
      text: '"Para @Ojos de Papel, nuestro logo y branding no son solo diseño; son nuestra carta de presentación al mundo como mujeres libres. El equipo de @somos.vibe.check logró captar la fuerza de nuestra agrupación y plasmarla en una identidad visual que nos representa con dignidad. Su estrategia y edición para el evento de escritura en cárceles fue fundamental para que nuestro mensaje llegara con claridad y profesionalismo." — Referente de @Ojos de Papel',
      color: 'pink'
    },
    {
      name: '@DarMargenAsociacion',
      role: 'Asociación civil',
      text: '"Llevar la temática de la escritura en cárceles a las redes sociales requiere una sensibilidad especial. El equipo de @somos.vibe.check entendió nuestra misión desde el primer día. Gracias a su estrategia de contenidos para el evento anual, logramos una presencia digital sólida, profesional y, sobre todo, humana. Captaron la esencia de @DarMargenAsociacion a la perfección."',
      color: 'teal'
    },
    {
      name: '@SochicProductos',
      role: 'Productos capilares',
      text: '"Gracias al asesoramiento y los catálogos de @somos.vibe.check, logramos organizar toda nuestra oferta de Fidelité de forma estratégica. El posicionamiento de @SochicProductos creció muchísimo y nuestras clientas aman la nueva forma de comprar."',
      color: 'purple'
    }
  ]
}
</script>

<template>
  <section id="testimonials" class="py-16 bg-white">
    <v-container>
      <h2 class="text-h3 font-weight-bold text-center mb-8 text-primary" data-aos="fade-up">Lo que dicen mis clientes</h2>
      
      <div class="d-flex justify-center mb-12" data-aos="fade-up">
        <v-tabs
          v-model="tab"
          color="secondary"
          align-tabs="center"
          class="rounded-pill"
          show-arrows
        >
          <v-tab
            v-for="category in categories"
            :key="category.value"
            :value="category.value"
            class="text-body-1 font-weight-bold px-6"
          >
            {{ category.label }}
          </v-tab>
        </v-tabs>
      </div>

      <v-window v-model="tab">
        <v-window-item
          v-for="category in categories"
          :key="category.value"
          :value="category.value"
        >
          <v-row>
            <v-col
              v-for="(item, index) in testimonials[category.value]"
              :key="index"
              cols="12"
              md="6"
              lg="4"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <v-card class="h-100 pa-6 rounded-xl border" elevation="0" hover>
                <div class="d-flex align-center mb-4">
                  <v-avatar :color="item.color" size="56" class="mr-4 elevation-2">
                    <span class="text-h5 font-weight-bold text-white">{{ item.name.charAt(1).toUpperCase() }}</span>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold text-primary">{{ item.name }}</div>
                    <div class="text-caption text-medium-emphasis font-weight-medium">{{ item.role }}</div>
                  </div>
                </div>
                
                <v-icon icon="mdi-format-quote-open" color="secondary" size="32" class="opacity-20 mb-2"></v-icon>
                <p class="text-body-2 text-medium-emphasis font-italic" style="line-height: 1.6;">{{ item.text }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </section>
</template>

<style scoped>
.opacity-20 {
  opacity: 0.2;
}

.v-tab {
  text-transform: none !important;
  letter-spacing: normal;
}
</style>
