<template>
  <div
    class="content-center bg-white rounded-md min-w-10 py-1 font-semibold text-black text-center text-sm leading-tight"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  text: string;
}>();
</script>
