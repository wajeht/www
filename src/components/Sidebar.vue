<script setup lang="ts">
import { ref } from 'vue';
import ColorModeSwitcher from './ColorModeSwitcher.vue';

const route = useRoute();

type Url = { url: string };

const pictures = ref<Url[]>([
  { url: '/images/blue.jpg' },
  { url: '/images/jaw.jpg' },
  { url: '/images/strength.jpeg' },
]);

const router = useRouter();

const randomProfilePicture = ref<string>('/images/jaw.jpg');

const currentImageIndex = ref<number>(-1);

function generateRandomPicture(): void {
  if (currentImageIndex.value === 2) currentImageIndex.value = -1;
  currentImageIndex.value++;
  randomProfilePicture.value = pictures.value[currentImageIndex.value].url.toString();

  // dont' redirect if it was on home page, just change image
  if (route.path != '/') {
    router.push('/');
  }
}
</script>

<template>
  <aside
    class="flex flex-col justify-between bg-[#1A1A1A] dark:bg-[color:#0B0A08] text-[color:#D4D3D2] lg:h-screen lg:flex-[35%] p-5 text-end border-b border-b-[color:#252420] lg:border-r lg:border-r-[color:#252420]"
  >
    <!-- top -->
    <div class="lg:mt-[170px]">
      <div class="flex flex-col gap-5">
        <!-- image -->
        <div class="flex justify-center lg:justify-end">
          <nuxt-img
            @click="generateRandomPicture()"
            class="w-24 h-24 border-2 border-solid rounded-full sm:text-center sm:justify-center sm:content-center border-[color:#939290] hover:border-[color:#FBF0DF] hover:cursor-pointer"
            :src="randomProfilePicture"
          />
        </div>

        <!-- name and description -->
        <div class="flex justify-center lg:justify-end">
          <div class="flex flex-col">
            <span class="flex justify-end gap-2">
              <!-- emo -->
              <span class="animate-wave">👋</span>
              <!-- description name -->
              <span>
                <span class="font-light"> hi there, this is </span>
                <span class="font-bold text-[color:#FBF0DF]"> Jaw! </span>
              </span>
            </span>

            <!-- description -->
            <VueWriter
              :array="[
                'A software developer..',
                'a competitive powerlifter..',
                'a strength consultant..',
                'a sushi chef..',
              ]"
              :delay="1000"
              :eraseSpeed="50"
              :typeSpeed="50"
            />
          </div>
        </div>

        <!-- nav -->
        <Nav />
      </div>

      <ColorModeSwitcher />
    </div>

    <!-- light/dark -->

    <!-- side bar copyright -->
    <div class="hidden text-xs font-light lg:block text-zinc-500">
      © 2022 jaw.dev. Made with ❤️ by
      <a
        class="hover:text-[color:#D4D3D2]"
        href="https://www.github.com/wajeht/jaw-dev"
        target="_blank"
        >@wajeht</a
      >
    </div>
  </aside>
</template>
