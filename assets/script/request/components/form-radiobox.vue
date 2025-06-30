<template>
  <div class="eds-radiobox"
       v-for="option in options"
       :key="option.value"
  >
    <div class="eds-radiobox__label">
      <span>{{ label }}</span>
    </div>
    <div class="eds-radiobox__wrapper"
         @click="emit('update:modelValue', option.value)"
    >
      <div class="eds-radiobox__box"
           :class="{'eds-radiobox__box--selected': option.value === modelValue}"
      >
      </div>
      <div class="eds-radiobox__label">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  required: Boolean,
  options: Array
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
</style>
