<script setup lang="ts">
import { useHtmlClassObserver } from '../composables/use-html-class-observer';
const { isDarkMode } = useHtmlClassObserver();

const route = useRoute();
</script>
<template>
  <div class="lg:flex">
    <!-- sidebar -->
    <Sidebar />

    <!-- main -->
    <main
      class="flex flex-col justify-between gap-3 lg:h-screen min-h-screen lg:overflow-scroll lg:flex-[65%] bg-[#E6E6E6] dark:bg-[color:#15140E] text-[color:#FBF0DF] p-5"
      :class="{ 'h-[calc(100vh-249px)]': route.path !== '/projects' }"
    >
      <!-- slot -->
      <div class="lg:max-w-[65%] lg:mt-[290px] relative">
        <div v-if="isDarkMode" class="fixed h-[300px] w-full z-10 left-[35%] hidden lg:block top-0 bg-gradient-to-t from-transparent from-0% via-[#13120d] via-50% to-[#15140E] to-100%" ></div>
        <slot />
      </div>

      <!-- copyright -->
      <div class="mt-2 text-xs font-light text-center lg:hidden sm:block text-zinc-500">
        <!-- light and dark -->
        <ColorModeSwitcher />

        <span> © 2022 jaw.dev. Made with ❤️ by </span>
        <a
          class="hover:text-[color:#D4D3D2]"
          href="https://www.github.com/wajeht/www"
          target="_blank"
          >@wajeht</a
        >
      </div>
    </main>
  </div>
</template>
