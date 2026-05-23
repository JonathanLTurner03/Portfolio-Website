<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg primary">
      <div class="container">
        <a class="navbar-brand poppins-medium header primary" href="/">Jonathan Turner</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-end" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto float-right text-right pr-3">
            <li class="nav-item collapsed-nav-item">
              <RouterLink
                class="nav-link primary poppins-regular"
                :class="{ currentPage: route.path === '/about' }"
                to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item collapsed-nav-item">
              <RouterLink
                class="nav-link primary poppins-regular"
                :class="{ currentPage: route.path === '/projects' }"
                to="/projects"
                >Projects</RouterLink
              >
            </li>
            <li class="nav-item collapsed-nav-item">
              <a
                class="nav-link primary poppins-regular"
                :class="{ currentPage: route.path === '/resume' }"
                target="_blank"
                href="/resume/resume.pdf"
                >Resume</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
