<template>
  <div class="eds-input" :class="{'eds-input--error': error}">
    <input
        type="text"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    >
    <span v-if="error">{{ errorString }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: String,
  error: Boolean,
  required: Boolean,
  errorString: String,
  label: String
});

const emit = defineEmits(['update:modelValue']);

const placeholder = computed(() => {
  return props.label + (props.required ? "*" : "");
});
</script>