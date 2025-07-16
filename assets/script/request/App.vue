<template>
  <div class="eds-form">
    <div class="eds-form-grid --columns-1 --half-width">
      <form-input
          v-for="item in ['firstName', 'lastName', 'email', 'phone']"
          :key="item"
          :label="t('labels.' + item)"
          :required="required.includes(item)"
          :error="errors[item]"
          :errorString="errorStrings[item]"
          v-model="value[item]"
          @click="resetErrors"
      />
    </div>
    <div class="eds-form-grid --columns-1">
      <form-textarea
          :label="t('labels.comment')"
          :required="required.includes('comment')"
          :error="errors.comment"
          v-model="value.comment"
          @click="resetErrors"
      />
    </div>
    <div class="eds-form-flex eds-form-flex--margin-bottom">
      <form-checkbox
          v-model="value.privacy"
          :label="t('labels.privacy')"
          :error="errors.privacy"
          :errorString="t('errors.privacy')"
          @click="resetErrors"
      />
    </div>
    <div class="eds-form-flex">
      <form-button :label="t('labels.request')" @click="submit"/>

    </div>
    <div class="eds-form__success --orange" v-if="success === 1">
      <div class="eds-form__success-content">
        <div class="eds-form__success-item">
          <i class="eds-icon eds-icon--forward_to_inbox"></i>
        </div>
        <span>{{ t('labels.sending') }}</span>
      </div>
    </div>
    <div class="eds-form__success" v-if="success === 2">
      <div class="eds-form__success-content">
        <div class="eds-form__success-item">
          <i class="eds-icon eds-icon--done"></i>
        </div>
        <span>{{ t('labels.success') }}</span>
      </div>
    </div>
    <div class="eds-form__success --red" v-if="success === -1">
      <div class="eds-form__success-content">
        <div class="eds-form__success-item">
          <i class="eds-icon eds-icon--clear"></i>
        </div>
        <span>{{ t('labels.error') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import axios from 'axios';
import {useI18n} from 'vue-i18n';

import FormCheckbox from './components/form-checkbox.vue';
import FormButton from './components/form-button.vue';
import FormInput from './components/form-input.vue';
import FormTextarea from './components/form-textarea.vue';
import FormRadiobox from "./components/form-radiobox.vue";

const {t} = useI18n();

const success = ref(0);
const value = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  privacy: false,
  comment: '',
  client_type: ''
});
const errors = reactive({
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  privacy: false,
  comment: false,
  client_type: false
});
const required = ['firstName', 'lastName', 'email', 'phone'];

const errorStrings = computed(() => ({
  firstName: t('errors.firstName'),
  lastName: t('errors.lastName'),
  email: t('errors.email'),
  phone: t('errors.phone'),
  privacy: t('errors.privacy'),
  comment: t('errors.comment')
}));

const submit = () => {
  if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value.email) &&
      value.firstName.length > 2 &&
      value.lastName.length > 2 &&
      value.privacy &&
      value.phone.length > 5 &&
      success.value === 0
  ) {
    success.value = 1;
    axios.post('/request.php', {
      uuid: '1dcba056-9a3b-4b9f-9287-253820be8d1c',
      data: {
        ...value,
        passAlong: {
          client_type: value.client_type
        }
      },
      lang: navigator.language.substr(0, 2) || 'EN'
    })
        .then(() => {
          success.value = 2;
          try {
            _paq.push(['trackGoal', 1]);
          } catch (e) {
          }
        })
        .catch(() => {
          success.value = -1;
        });
  } else {
    errors.firstName = !(value.firstName.length > 2);
    errors.lastName = !(value.lastName.length > 2);
    errors.email = !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value.email);
    errors.phone = !(value.phone.length > 5);
    errors.privacy = !value.privacy;
    errors.comment = false;
  }
};

const resetErrors = () => {
  Object.keys(errors).forEach(key => {
    errors[key] = false;
  });
};
</script>