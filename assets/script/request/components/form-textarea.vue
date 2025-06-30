<template>
  <div class="eds-input" :class="{'--error': error}">
    <textarea
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script setup>
import {defineProps, computed, defineEmits} from 'vue';

const props = defineProps({
  modelValue: String,
  error: Boolean,
  required: Boolean,
  label: String
});

const emit = defineEmits(['update:modelValue']);

const placeholder = computed(() => {
  return props.label + (props.required ? "*" : "");
});
</script>