<template>
  <div
      class="eds-checkbox"
      @click="emit('update:modelValue', !modelValue)"
      :class="{'eds-checkbox--error': error}"
  >
    <div class="eds-checkbox__wrapper">
      <div class="eds-checkbox__box"
           :class="{'eds-checkbox__box--checked': modelValue}"
      >
      </div>
      <div class="eds-checkbox__label">
        {{ label }}
      </div>
    </div>
    <div class="eds-checkbox__error"
         v-if="error"
    >
      {{ errorString }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: String,
  error: Boolean,
  errorString: String,
  required: Boolean
});

const emit = defineEmits(['update:modelValue']);
</script>