<script setup lang="ts">
import { onMounted } from 'vue'

import stars from '@/assets/images/photography/stars.jpg'
import starsWithMoon from '@/assets/images/photography/stars-w-moon.jpg'
import birb from '@/assets/images/photography/birb.jpg'
import birbTakeoff from '@/assets/images/photography/birbtakeoff.jpg'
import birbFlying from '@/assets/images/photography/birb-flying.jpg'
import still from '@/assets/images/photography/still.jpg'
import sunLensFlare from '@/assets/images/photography/sun-lens-flare.jpg'
import stars2 from '@/assets/images/photography/stars-2.jpg'

onMounted(() => {
  document.addEventListener('visibilitychange', () => {
    const scrollingContainer = document.querySelector('.scrolling-container') as HTMLElement
    if (scrollingContainer) {
      scrollingContainer.style.animationPlayState = document.hidden ? 'paused' : 'running'
    }
  })
})
</script>

<template>
  <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about border-top">
      <div class="col-sm-10 col-sm-8 col-lg-6 pr-sm-5 photography-imgs">
        <div class="scrolling-container">
          <picture>
            <img :src="stars" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="starsWithMoon" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birb" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birbTakeoff" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birbFlying" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="still" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="sunLensFlare" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="stars2" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <!-- Repeating for animation -->
          <picture>
            <img :src="stars" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="starsWithMoon" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birb" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birbTakeoff" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="birbFlying" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="still" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="sunLensFlare" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
          <picture>
            <img :src="stars2" class="d-block mx-md-auto img-fluid p-img" loading="lazy" />
          </picture>
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
          // Photography & Nature
        </h1>
        <p class="lead poppins-regular">
          In addition to my interest in drones, I am an avid hiker. Photography is a significant
          part of my hikes, as I love capturing the essence of the places I visit. From breathtaking
          landscapes to hidden gems in nature, I enjoy documenting my journeys through my camera
          lens. Long exposure photography allows me to capture the stunning night sky and
          mesmerizing sunsets, providing a unique way to remember the places I've been. This hobby
          has taken me to various locations, both familiar and remote, and has increased my
          appreciation for the world around us.
        </p>
      </div>
    </div>
  </div>
</template>
