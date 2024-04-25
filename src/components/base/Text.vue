<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  tag: {
    type: String,
    default: "div",
    required: true,
  },
});
</script>
