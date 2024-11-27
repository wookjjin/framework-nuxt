<script setup lang="ts">
import type { IBasicInputProps } from '~/types'

withDefaults(defineProps<IBasicInputProps>(), {
  type: 'text',
  label: '',
  placeholder: '',
  width: '100%',
  size: 'md',
  required: false,
  disabled: false,
  minlength: undefined,
  maxlength: undefined,
  showCount: false,
  clearable: false,
  readonly: false,
  usePrefix: false,
  preIconName: '',
  usePassword: false,
  isSearch: false,
})

const emit = defineEmits(['focus', 'search'])

const [inputValue, valueModifiers] = defineModel<string, 'uppercase'>(
  'inputValue',
  {
    set(value) {
      if (valueModifiers.uppercase) {
        return value.toUpperCase()
      }
      return value
    },
  },
)

const validMessage = defineModel('validMessage', {
  required: false,
})

const status = defineModel<'success' | 'error' | ''>('status', {
  default: '',
})

const inputInst = ref<HTMLInputElement>()
const showPassword = ref(false)
const onInput = (e: Event) => {
  inputValue.value = (e.target as HTMLInputElement).value
  if (validMessage.value) {
    validMessage.value = ''
    status.value = ''
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
  if (inputInst.value) {
    inputInst.value.type = showPassword.value ? 'text' : 'password'
  }
}

const clearInput = () => {
  if (inputInst.value) {
    inputInst.value.value = ''

    // input 이벤트를 수동으로 트리거
    const event = new Event('input', { bubbles: true })
    inputInst.value.dispatchEvent(event)
  }
}

const onFocus = () => {
  emit('focus')
}

const handleFocus = () => {
  inputInst.value?.focus()
}

defineExpose({
  handleFocus,
})
</script>

<template>
  <div :style="{ width: `${width}` }" class="cm-input">
    <label
      v-if="label"
      class="textfield__label"
      :class="{ 'is-required': required }"
    >{{ label }}</label>
    <div class="cm-input__wrapper">
      <div
        class="cm-input__input"
        :class="[
          `size--${size}`,
          {
            'is-disabled': disabled,
            'is-readonly': readonly,
            'is-error': status === 'error',
            'use-prefix': usePrefix,
          },
        ]"
      >
        <template v-if="usePrefix">
          <icon :name="preIconName" class="textfield__prefix-icon" />
        </template>
        <input
          ref="inputInst"
          v-model="inputValue"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :clearable="clearable"
          :minlength="minlength"
          :maxlength="maxlength"
          :readonly="readonly"
          @input="onInput"
          @focus="onFocus"
        >
        <!-- input clear icon -->
        <div class="textfield__suffix-area">
          <template v-if="inputValue && !disabled && !readonly">
            <button
              type="button"
              class="textfield__suffix-icon"
              @click="clearInput"
            >
              <icon
                name="clear__full--abb"
                width="24"
                height="24"
                alt="내용 초기화"
              />
            </button>
          </template>
          <!-- 비밀번호 토글 아이콘 -->
          <template v-if="usePassword">
            <button
              type="button"
              class="textfield__suffix-icon"
              @click="togglePasswordVisibility"
            >
              <icon
                v-if="!showPassword"
                name="eye-dash__line--abb"
                width="24"
                height="24"
                alt="비밀번호 가리기"
              />
              <icon
                v-if="showPassword"
                name="eye__line--abb"
                width="24"
                height="24"
                alt="비밀번호 보기"
              />
            </button>
          </template>
          <template v-if="isSearch">
            <button type="button" @click="() => emit('search')">
              <icon
                name="search__line--737"
                width="24"
                height="24"
                alt=""
                class="textfield__suffix-icon"
              />
            </button>
          </template>
        </div>
      </div>
      <p
        v-if="validMessage"
        class="textfield__message whitespace-pre-line"
        :class="status === 'error' ? 'is-invalid' : 'is-valid'"
      >
        {{ validMessage }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
