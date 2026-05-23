<script setup lang="ts">
import HeroDesktop from '@/assets/images/hero/Desktop.jpg'
import HeroMobile from '@/assets/images/hero/Mobile.jpg'

function scrollTo(id: string) {
  const element = document.getElementById(id)
  element!.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container col-xxl-8 px-4 py-xxl-4 py-lg-3 hero-cont">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero">
      <div class="col-10 col-sm-8 col-lg-6 pr-sm-5 hero-image-container">
        <picture>
          <source :srcset="HeroMobile" media="(max-width: 991px)" />
          <img :src="HeroDesktop" class="d-block mx-lg-auto img-fluid hero-image" loading="lazy" />
        </picture>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 lh-1 mb-3 poppins-extrabold" style="font-weight: bold">
          Hi, I'm Jonathan
        </h1>
        <p class="lead poppins-regular">
          I believe the most interesting problems in tech live at the boundary of software and
          hardware. With a B.S. in Computer Science (AI concentration) from Kennesaw State
          University, I've built my career around that boundary, working in autonomous systems and
          robotics, developing edge AI pipelines, and engineering reliable integrations between
          intelligent software and the physical world. I'm always open to new opportunities,
          collaborations, and conversations, especially where the work is challenging and the
          learning never stops.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            class="btn btn-secondary btn-lg px-4 me-md-2"
            @click="scrollTo('featuredProjects')"
            title="Scrolls to Feature Projects"
          >
            Featured Projects
          </button>
          <a href="./resume/resume.pdf"
            ><button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              style="width: 100%"
            >
              Resume <i class="fa fa-external-link" aria-hidden="true"></i></button
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
