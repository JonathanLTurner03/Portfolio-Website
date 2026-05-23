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
          I'm a recent graduate of Kennesaw State University, where I earned a B.S. in Computer
          Science with a concentration in Artificial Intelligence. As an aspiring software developer
          specializing in machine learning, I'm eager to apply and expand my skills in real-world
          projects. I have a solid background in Java and Python, and I'm growing my proficiency in
          C#, C++, MySQL, and web development frameworks like VueJS and Bootstrap. I'm actively
          seeking full-time opportunities to contribute, learn, and advance my abilities within the
          tech industry.
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
