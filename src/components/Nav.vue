<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="flex justify-center lg:justify-end">
    <nav
      class="flex flex-wrap lg:flex-col lg:gap-3 gap-3 font-light text-[color:#D4D3D2] items-center justify-center"
    >
      <span class="flex gap-3 sm:flex-row lg:flex-col lg:gap-0">
        <NuxtLink
          to="/projects"
          class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none"
          :class="{
            'font-bold text-[color:#FBF0DF] grayscale-0': route.path === '/projects',
            grayscale: route.path !== '/projects',
          }"
          >projects 📚
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none"
          :class="{
            'font-bold text-[color:#FBF0DF] grayscale-0': route.path === '/contact',
            grayscale: route.path !== '/contact',
          }"
          >contact 💌
        </NuxtLink>
        <NuxtLink
          to="/"
          class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none"
          :class="{
            'font-bold text-[color:#FBF0DF] grayscale-0': route.path === '/',
            grayscale: route.path !== '/',
          }"
        >
          about 👨‍💻‍</NuxtLink
        >
      </span>

      <span class="flex gap-3 sm:flex-row lg:flex-col lg:gap-0">
        <a
          class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none"
          href="https://www.github.com/wajeht"
          target="_blank"
          >github ↗️</a
        >
        <a
          class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none"
          href=" https://www.linkedin.com/in/kyawsny/"
          target="_blank"
          >linkedin ↗️</a
        >
        <ConfirmationLink
          link="https://instagram.com/thejaww"
          label="instagram ↗️"
          content="all thoughts are my own!"
        />
      </span>
    </nav>
  </div>
</template>
