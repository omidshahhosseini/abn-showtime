<template>
  <div class="overflow-hidden border-[1px] border-gray-700">
    <img
      :src="imgSrc || require('@/assets/placeholder.png')"
      class="rounded-sm w-full hover:scale-110 transition ease duration-300"
    />
  </div>
  <div class="space-y-1 pl-1 text-left">
    <Text v-if="title" class="text-2xl leading-tight" tag="h2">
      {{ title }}
    </Text>
    <div class="flex flex-row items-center space-x-2">
      <Badge v-if="rate" :text="rate" />
      <Text v-if="genres" class="text-sm truncate" tag="span"
        >{{ genres.join(", ") }}
      </Text>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Badge from "./base/Badge";
import Text from "./base/Text";

defineProps({
  imgSrc: String,
  title: String,
  rate: String || Number,
  genres: Array,
});
</script>
<style lang=""></style>
