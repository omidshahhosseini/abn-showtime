<template>
  <div class="mx-auto container mt-8 pb-10 h-screen">
    <div v-if="!loading" class="space-y-14 font-sans">
      <TVShowCarousel :genre="Genre.Drama" :shows="dramaShows" />
      <TVShowCarousel :genre="Genre.Comedy" :shows="comedyShows" />
      <TVShowCarousel :genre="Genre.Horror" :shows="horrorShows" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGetTvShows } from "@/services/tvShow/useGetTvShows";
import { Genre } from "@/constants/genres";
import TVShowCarousel from "@/components/TVShowCarousel.vue";

const { data: tvShows, error, loading } = useGetTvShows();

const filteredShows = (genre) =>
  computed(() => {
    if (!tvShows.value) return [];
    return tvShows.value.filter((show) => show?.genres?.includes(genre));
  });

const dramaShows = filteredShows(Genre.Drama);
const comedyShows = filteredShows(Genre.Comedy);
const horrorShows = filteredShows(Genre.Horror);
</script>
