<script setup lang="ts">
import { ref } from 'vue';

type Props = {
  content: string;
  label: string;
  link: string;
};

const showModal = ref<boolean>(false);

const props = defineProps<Props>();

function go(): void {
  window.open(props.link);
}
</script>

<template>
  <span>
    <p
      @click="showModal = true"
      class="hover:underline grayscale hover:grayscale-0 hover:text-[color:#FBF0DF] flex-none cursor-pointer"
    >
      {{ label }}
    </p>

    <slot @click="showModal = true"></slot>

    <Teleport to="body">
      <div v-if="showModal" @click="$emit('open')" class="relative z-10" role="dialog">
        <!-- background -->
        <div class="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <!-- content -->
          <div class="flex max-w-3xl flex-col gap-2 px-4 pt-5 pb-4 bg-[color:#252420] rounded-sm">
            <!-- title -->
            <div class="flex flex-col gap-4 justify-between text-[color:#FBF0DF]">
              <p>{{ content }}</p>

              <!-- buttons -->
              <div class="flex justify-between gap-2">
                <!-- go ahead -->
                <button
                  @click="go()"
                  class="hover:outline hover:outline-[color:#37362F] flex gap-1 items-center py-1 px-4 rounded-sm font-light hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]"
                >
                  <small class="text-xs"> ✅ </small>
                  ok
                </button>

                <!-- cancel -->
                <button
                  @click="showModal = false"
                  class="hover:outline hover:outline-[color:#37362F] flex gap-1 items-center py-1 px-4 rounded-sm font-light hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]"
                >
                  <small class="text-xs"> ❌ </small>
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </span>
</template>
