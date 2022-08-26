<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();

const pictures = ref<{ url: String, }[]>([
  {
    url: './blue.jpg'
  },
  {
    url: './jaw.jpg'
  },
  {
    url: './strength.jpeg'
  }
])

const randomProfilePicture = ref('./jaw.jpg');

function generateRandomPicture(): void {
  const length = pictures.value.length;
  const random = Math.floor(Math.random() * (length - 0) + 0);
  randomProfilePicture.value = pictures.value[random].url.toString();
}

</script>
<template>
  <div class="lg:flex">
    <!-- sidebar -->
    <aside
      class="flex flex-col justify-between bg-[color:#0B0A08] text-[color:#D4D3D2] lg:h-screen lg:flex-[35%] p-5 text-end border-b border-b-[color:#252420] lg:border-r  lg:border-r-[color:#252420] ">

      <!-- top -->
      <div class="lg:mt-[170px]">
        <div class="flex flex-col gap-5">
          <!-- image -->
          <div class="flex justify-center lg:justify-end ">
            <nuxt-img @click="generateRandomPicture()"
              class="w-24 h-24 border-2 border-solid rounded-full sm:text-center sm:justify-center sm:content-center border-[color:#939290] hover:border-[color:#FBF0DF] hover:cursor-pointer"
              :src="randomProfilePicture" />
          </div>

          <!-- name and description -->
          <div class="flex justify-center lg:justify-end ">
            <div class="flex flex-col">

              <span class="flex justify-end gap-2">
                <!-- emo -->
                <span class="animate-wave">👋</span>
                <!-- description name -->
                <span>
                  <span class="font-light">
                    hi there, this is
                  </span>
                  <span class="font-bold text-[color:#FBF0DF]">
                    Jaw!
                  </span>
                </span>
              </span>

              <!-- description -->
              <p>a competitive powerlifter...</p>
            </div>
          </div>

          <!-- nav -->
          <Nav />

        </div>
      </div>

      <!-- side bar copyright -->
      <div class="hidden text-xs font-light lg:block text-zinc-500">© 2022 jaw.dev. All Rights Reserved.</div>
    </aside>

    <!-- main -->
    <main
      class="flex flex-col justify-between gap-3 lg:h-screen lg:overflow-scroll  lg:flex-[65%] bg-[color:#15140E] text-[color:#FBF0DF] p-5"
      :class="{ 'h-[calc(100vh-249px)]': route.path !== '/projects' }">

      <!-- slot -->
      <div class="lg:max-w-[65%] lg:mt-[290px]">
        <slot />
      </div>

      <!-- copyright -->
      <div class="mt-2 text-xs font-light text-center lg:hidden sm:block text-zinc-500">© 2022 jaw.dev.
        All Rights
        Reserved.
      </div>
    </main>
  </div>
</template>