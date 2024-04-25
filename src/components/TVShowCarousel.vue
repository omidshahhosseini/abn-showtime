<template>
  <section class="space-y-4 text-white">
    <Text class="pl-4 text-5xl text-left" tag="h1">{{ genre }}</Text>
    <Carousel
      :breakpoints="breakpoints"
      @slide-start="toggleIsSliding"
      @slide-end="toggleIsSliding"
    >
      <Slide v-for="show in shows" :key="show.id">
        <a
          :href="`/shows/${show.id}`"
          @click.stop="preventUnintentionalClickWhileDragging"
          className="space-y-2 w-[98%] overflow-hidden carousel__item"
        >
          <Card
            :imgSrc="show.image.medium"
            :title="show.name"
            :rate="show.rating.average"
            :genres="show.genres"
          />
        </a>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Card from "./Card.vue";
import Text from "./base/Text.vue";
import "vue3-carousel/dist/carousel.css";

defineProps({
  shows: Array,
  genre: String,
});

const isDragging = ref(false);

const toggleIsSliding = () => {
  isDragging.value = !isDragging.value;
};
const preventUnintentionalClickWhileDragging = (event: any) => {
  if (isDragging.value) {
    event.preventDefault();
  }
};

const breakpoints = {
  360: {
    itemsToShow: 1.2,
    snapAlign: "center",
  },
  768: {
    itemsToShow: 2.3,
    itemsToScroll: 2,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3.3,
    itemsToScroll: 3,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 5,
    itemsToScroll: 5,
    snapAlign: "start",
  },
};
</script>
