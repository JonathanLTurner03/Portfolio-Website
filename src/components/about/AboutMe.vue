<script setup lang="ts">
import SelfPortraitMobile from '@/assets/images/aboutme/self-portrait-mobile.jpg'
import SelfPortraitDesktop from '@/assets/images/aboutme/self-portrait.jpg'
</script>
<template>
  <div
    class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 about-me-cont"
    style="min-height: 90vh; justify-content: center"
  >
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about">
      <div class="col-10 col-md-8 col-lg-6 pr-sm-5 about-img">
        <picture>
          <source :srcset="SelfPortraitMobile" media="(max-width: 991px)" />
          <img
            :src="SelfPortraitDesktop"
            class="d-block mx-md-auto img-fluid self-portrait"
            loading="lazy"
          />
        </picture>
      </div>
      <div class="col-lg-6">
        <h1 class="display-7 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">// About Me</h1>
        <p class="lead poppins-regular">
          Hey, I'm Jonathan. I'm a computer scientist with a appetite for learning not just in
          the professional sense, but across everything I do. By day I work at the intersection of
          autonomous systems and hardware integration; by night I'm usually tinkering with FPV
          drones, laser engravers, 3D printers, or whatever interest has caught my attention.
          I graduated from Kennesaw State University with a B.S. in Computer Science (AI
          concentration), and I've carried that curiosity into every project since.
        </p>
      </div>
    </div>
    <div class="floating poppins-regular-italic">
      <p class="notice text-center">Scroll to learn more about my hobbies and interests</p>
    </div>
  </div>
</template>
