<template>
  <div class="eds-input" :class="{'eds-input--error': error}">
    <select
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :class="{'eds-select--unselected': modelValue === 0}"
    >
      <option hidden :value="0">{{ placeholder }}</option>
      <option
          v-for="item in items"
          :key="item.value"
          :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    <span v-if="error">{{ errorString }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  error: Boolean,
  required: Boolean,
  errorString: String,
  label: String,
  items: Array
});

const emit = defineEmits(['update:modelValue']);

const placeholder = computed(() => {
  return props.label + (props.required ? "*" : "");
});
</script>

<style scoped>
</style>
