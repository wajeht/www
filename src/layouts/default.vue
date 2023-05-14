<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';

const route = useRoute();
</script>
<template>
  <div class="lg:flex">
    <!-- sidebar -->
    <Sidebar />

    <!-- main -->
    <main
      class="flex flex-col justify-between gap-3 min-h-screen lg:h-screen lg:overflow-scroll lg:flex-[65%] bg-[#EEEEEE] dark:bg-[color:#15140E] text-[color:#FBF0DF] p-5"
      :class="{ 'h-[calc(100vh-249px)]': route.path !== '/projects' }"
    >
      <!-- slot -->
      <div class="lg:max-w-[65%] lg:mt-[290px]">
        <slot />
      </div>

      <!-- copyright -->
      <div class="mt-2 text-xs font-light text-center lg:hidden sm:block text-zinc-500">
        © 2022 jaw.dev. Made with ❤️ by
        <a
          class="hover:text-[color:#D4D3D2]"
          href="https://www.github.com/wajeht/jaw-dev"
          target="_blank"
          >@wajeht</a
        >
      </div>
    </main>
  </div>
</template>
