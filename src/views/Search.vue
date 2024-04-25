<template>
  <div class="mx-auto px-4 container h-screen">
    <div class="mt-3 mb-4">
      <h2 class="font-semibold text-3xl text-left text-white">
        Search results for <span class="text-[#FBFADA]">{{ searchQuery }}</span>
      </h2>
    </div>
    <div v-if="isLoading">
      <h1>Loading...</h1>
    </div>
    <div class="pb-10">
      <ul
        class="gap-x-3 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <li
          v-for="result in searchResults.value"
          :key="JSON.stringify(result)"
          class="text-white"
        >
          <a
            :href="`/shows/${result?.show?.id}`"
            className="space-y-2 overflow-hidden carousel__item"
          >
            <Card
              :imgSrc="result?.show?.image?.medium"
              :title="result?.show?.name"
              :rate="result?.show?.rating?.average"
              :genres="result?.show?.genres"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import { useSearchShows } from "@/services/tvShow/useSearchShows";
import { debounce } from "@/utils/debounce";
import Card from "@/components/Card.vue";

const route = useRoute();
const searchQuery = ref(route.query.q || "");
const searchResults = ref([]);
const isLoading = ref(true);

const search = debounce((query) => {
  if (query.length === 0) {
    searchResults.value = [];
    return;
  }

  try {
    isLoading.value = true;
    const { data } = useSearchShows(query);
    searchResults.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

watchEffect(() => {
  searchQuery.value = route.query.q;
  search(route.query.q || "");
});
</script>
