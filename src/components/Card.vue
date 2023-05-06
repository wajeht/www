<script setup lang="ts">
type Technology = {
  name: string;
  textColor: string;
  backgroundColor: string;
};

type Link = {
  name: string;
  url: string;
};

type Image = {
  url: string;
  backgroundColor: string;
};

export type Video = {
  title: string;
  label: string;
  url: string;
};

export type Props = {
  subtitle?: string;
  title?: string;
  wip?: boolean;
  current?: boolean;
  images?: Image[];
  video?: Video;
  descriptions?: string[];
  technologies?: Technology[];
  links?: Link[];
};

const props = defineProps<Props>();

const hydrate = ref<boolean>(false);
</script>

<template>
  <article
    @mouseenter="hydrate = true"
    @mouseleave="hydrate = false"
    :class="{ 'outline outline-1 outline-[color:#6D685F]': current }"
    class="flex flex-col gap-3 bg-[color:#252420] p-5 rounded-sm hover:bg-[color:#2A2924]"
  >
    <!-- title and description -->
    <div
      :class="{
        'flex flex-col gap-1': descriptions?.length && title?.length && technologies?.length,
      }"
    >
      <!-- title -->
      <span class="flex items-center justify-between sm:flex-wrap">
        <!-- title -->
        <span class="flex flex-wrap items-center gap-2">
          <h1 class="text-2xl text-[color:#FBF0DF]">{{ title }}</h1>
          <span class="font-light text-[color:#D4D3D2]">{{ subtitle }}</span>
        </span>

        <!-- wip -->
        <small
          v-if="wip"
          class="font-light text-[color:#252420] px-2 rounded-md grayscale italic bg-[color:#F89B4B]"
          :class="{ 'grayscale-0': hydrate || current }"
          >work in progress</small
        >
      </span>

      <nuxt-img
        v-for="(m, i) in images"
        :key="i"
        :src="m.url"
        :placeholder="[100]"
        style="min-height: 240px"
        class="border-2 border-[color:#3C3C3C] bg-[color:#1B1A12] grayscale object-contain lg:object-center rounded-sm max-h-[15rem] mb-1"
        :style="{ 'background-color': m.backgroundColor }"
        :class="{ 'grayscale-0': hydrate || current }"
      />

      <!-- badges -->
      <small
        v-if="technologies?.length"
        class="flex flex-wrap gap-1 mb-2 grayscale"
        :class="{ 'grayscale-0': hydrate || current }"
      >
        <small
          v-for="(t, i) in technologies"
          :key="i"
          :class="[t.backgroundColor, t.textColor]"
          class="px-1 py-0.5 text-xs rounded-xl flex-none"
        >
          <small class="px-0.5">{{ t.name }}</small>
        </small>
      </small>

      <!-- description -->
      <span v-if="descriptions?.length" class="flex flex-col gap-2">
        <p v-for="(d, i) in descriptions" :key="i" class="text-[color:#D4D3D2] font-light">
          {{ d }}
        </p>
      </span>
    </div>

    <!-- buttons -->
    <div v-if="links?.length || video != null || video != undefined" class="flex flex-wrap gap-2">
      <!-- demo/github -->
      <a
        v-for="(l, i) in links"
        :key="i"
        :href="l.url"
        target="_blank"
        class="py-1 px-4 rounded-sm font-light hover:outline hover:outline-[color:#37362F] hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]"
        >{{ l.name }}</a
      >

      <!-- modal -->
      <div v-if="video">
        <VideoModal v-if="video" :title="video.title" :url="video.url" :label="video.label" />
      </div>
    </div>
  </article>
</template>
