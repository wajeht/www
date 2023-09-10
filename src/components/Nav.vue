<script setup lang="ts">
const route = useRoute();

const NAV_LINKS = [
  {
    url: '/projects',
    name: 'projects 📚',
  },
  {
    url: '/',
    name: 'about 👨‍💻',
  },
  {
    url: '/contact',
    name: 'contact 💌',
  },
];
</script>

<template>
  <div class="flex justify-center lg:justify-end">
    <nav
      class="flex flex-wrap lg:flex-col lg:gap-3 gap-3 font-light text-[#8D8D8D] dark:text-[color:#D4D3D2] items-center justify-center"
    >
      <span class="flex gap-3 sm:flex-row lg:flex-col lg:gap-0">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :to="link.url"
          class="hover:underline grayscale hover:grayscale-0 hover:text-[#eeeeee] dark:hover:text-[color:#FBF0DF] flex-none"
          :class="{
            'font-bold text-[#EEEEEE] dark:text-[color:#FBF0DF] grayscale-0':
              route.path === `${link.url}`,
            grayscale: route.path !== `${link.url}`,
          }"
          >{{ link.name }}</NuxtLink
        >
      </span>

      <span class="flex gap-3 sm:flex-row lg:flex-col lg:gap-0">
        <a
          class="hover:underline grayscale hover:grayscale-0 hover:text-[#eeeeee] dark:hover:text-[color:#FBF0DF] flex-none"
          href="https://www.github.com/wajeht"
          target="_blank"
          >github ↗️</a
        >
        <a
          class="hover:underline grayscale hover:grayscale-0 hover:text-[#eeeeee] dark:hover:text-[color:#FBF0DF] flex-none"
          href=" https://www.linkedin.com/in/kyawsny/"
          target="_blank"
          >linkedin ↗️</a
        >
        <!-- <ConfirmationLink
          link="https://instagram.com/thejaww"
          label="instagram ↗️"
          content="all thoughts are my own!"
        /> -->
      </span>
    </nav>
  </div>
</template>
