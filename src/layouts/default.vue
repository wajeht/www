<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <div class="lg:flex">
    <!-- sidebar -->
    <Sidebar />

    <!-- main -->
    <main
      class="flex flex-col justify-between gap-3 min-h-screen lg:h-screen lg:overflow-scroll lg:flex-[65%] bg-[#E6E6E6] dark:bg-[color:#15140E] text-[color:#FBF0DF] p-5"
      :class="{ 'h-[calc(100vh-249px)]': route.path !== '/projects' }"
    >
      <!-- slot -->
      <div class="lg:max-w-[65%] lg:mt-[290px]">
        <slot />
      </div>

      <!-- copyright -->
      <div class="mt-2 text-xs font-light text-center lg:hidden sm:block text-zinc-500">
        <!-- light and dark -->
        <ColorModeSwitcher />

        <span> © 2022 jaw.dev. Made with ❤️ by </span>
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
