<script setup lang="ts">
import type { IntervalType } from '~/types/common'

const { texts = [
  'Frontend Developer',
  'Vue.js Expert',
  'UI/UX Enthusiast',
  'Nuxt.js Specialist',
  'Creative Problem Solver',
] } = defineProps<{ texts?: string[] }>()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const displayText = ref('')
const showCursor = ref(true)
let currentIndex = 0
let currentCharIndex = 0
let isDeleting = false
let timeoutId: IntervalType = null
let cursorInterval: IntervalType = null

// 타이핑 속도 설정
const TYPING_SPEED = 100 // 타이핑 속도 (ms)
const DELETING_SPEED = 50 // 삭제 속도 (ms)
const PAUSE_TIME = 2000 // 완성된 텍스트 표시 시간 (ms)

const typeText = () => {
  const currentText = texts[currentIndex]

  if (!currentText)
    return

  if (!isDeleting && currentCharIndex < currentText.length) {
    // 타이핑 중
    displayText.value += currentText.charAt(currentCharIndex)
    currentCharIndex++
    timeoutId = setTimeout(typeText, TYPING_SPEED)
  }
  else if (isDeleting && currentCharIndex > 0) {
    // 삭제 중
    displayText.value = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
    timeoutId = setTimeout(typeText, DELETING_SPEED)
  }
  else if (!isDeleting && currentCharIndex === currentText.length) {
    // 타이핑 완료 - 잠시 대기 후 삭제 시작
    isDeleting = true
    timeoutId = setTimeout(typeText, PAUSE_TIME)
  }
  else if (isDeleting && currentCharIndex === 0) {
    // 삭제 완료 - 다음 텍스트로 이동
    isDeleting = false
    currentIndex = (currentIndex + 1) % texts.length
    timeoutId = setTimeout(typeText, TYPING_SPEED)
  }
}

const startCursorBlink = () => {
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
}

onMounted(() => {
  typeText()
  startCursorBlink()
})

onUnmounted(() => {
  if (timeoutId)
    clearTimeout(timeoutId)
  if (cursorInterval)
    clearInterval(cursorInterval)
})
</script>

<template>
  <div class="typing-container">
    <client-only>
      <template #fallback>
        <h1 class="main-title">
          <span class="cursor">|</span>
        </h1>
      </template>

      <h1
        class="main-title"
        :class="{ 'dark-mode': isDark }"
      >
        <span class="typing-text">{{ displayText }}</span>
        <span
          class="cursor"
          :class="{ 'blink': showCursor, 'dark-mode': isDark }"
        >|</span>
      </h1>
    </client-only>
  </div>
</template>

<style scoped>
.typing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.main-title.dark-mode {
  color: #e2e8f0;
}

.typing-text {
  color: #4299e1;
  background: linear-gradient(135deg, var(--color-mint-500) 0%, var(--color-sky-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}

.cursor {
  color: #4299e1;
  font-weight: 100;
  animation: blink 1.06s infinite;
  transition: color 0.3s ease;
}

.cursor.dark-mode {
  color: #90cdf4;
}

.cursor.blink {
  opacity: 1;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .main-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.4rem;
  }
}
</style>
