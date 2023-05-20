<script setup lang="ts">
import { ref } from 'vue';

type Props = {
  title: string;
  url: string;
  label: string;
};

const props = defineProps<Props>();

const showModal = ref<boolean>(false);
</script>

<template>
  <span>
    <button
      @click="showModal = true"
      class="flex gap-1 items-center hover:outline hover:outline-[color:#37362F] py-1 px-4 rounded-sm font-light hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]"
    >
      {{ label }}
    </button>

    <Teleport to="body">
      <div v-if="showModal" @click="$emit('open')" class="relative z-10" role="dialog">
        <!-- background -->
        <div class="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <!-- content -->
          <div
            class="flex max-w-3xl flex-col gap-2 px-4 pt-5 pb-4 bg-[#FBFBFB] dark:bg-[#252420] rounded-sm"
          >
            <!-- title -->
            <div class="flex justify-between">
              <!-- heading -->
              <h1 class="text-2xl text-[#1A1A1A] dark:text-[color:#FBF0DF]">{{ title }}</h1>

              <!-- button -->
              <button
                @click="showModal = false"
                class="hover:outline hover:outline-[color:#37362F] flex gap-1 items-center py-1 px-4 rounded-sm font-light hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]"
              >
                <small class="text-xs"> ❌ </small>
                close
              </button>
            </div>

            <!-- description -->
            <!-- <p class="text-sm  text-[color:#D4D3D2] font-light">Are you sure you want to deactivate your account?
                </p> -->

            <!-- video -->
            <video class="rounded-sm" :src="url" muted autoplay controls></video>
          </div>
        </div>
      </div>
    </Teleport>
  </span>
</template>
