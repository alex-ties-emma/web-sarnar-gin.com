<template>
  <div class="eds-button eds-button--red">
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String
});
</script>