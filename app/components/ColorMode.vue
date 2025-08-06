<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})

// 애니메이션 타입 정의
type AnimationType = 'circle' | 'fade' | 'slide'

// 원형 확산 애니메이션과 함께 테마 토글
const toggleWithAnimation = async (event: MouseEvent, animationType: AnimationType = 'circle') => {
  if (!document.startViewTransition) {
    isDark.value = !isDark.value
    return
  }

  const animationClass = `${animationType}-transition`

  // 클릭 좌표 설정 (circle 전용)
  if (animationType === 'circle') {
    const clickX = (event.clientX / window.innerWidth) * 100
    const clickY = (event.clientY / window.innerHeight) * 100
    document.documentElement.style.setProperty('--click-x', `${clickX}%`)
    document.documentElement.style.setProperty('--click-y', `${clickY}%`)
  }

  // 다음 프레임에서 트랜지션 시작
  requestAnimationFrame(() => {
    document.documentElement.classList.add(animationClass)

    const transition = document.startViewTransition(() => {
      isDark.value = !isDark.value
    })

    transition.finished.finally(() => {
      document.documentElement.classList.remove(animationClass)
      if (animationType === 'circle') {
        document.documentElement.style.removeProperty('--click-x')
        document.documentElement.style.removeProperty('--click-y')
      }
    })
  })
}

// 각 애니메이션 타입별 함수들
const toggleWithCircleAnimation = (event: MouseEvent) => toggleWithAnimation(event, 'circle')
// const toggleWithFadeAnimation = (event: MouseEvent) => toggleWithAnimation(event, 'fade')
// const toggleWithSlideAnimation = (event: MouseEvent) => toggleWithAnimation(event, 'slide')
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <!-- 기본: 원형 확산 애니메이션 -->
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost" class="theme-toggle-btn"
      @click="toggleWithCircleAnimation"
    />

    <!-- 다른 애니메이션을 원할 경우 아래 중 하나를 사용 -->
    <!-- 페이드 애니메이션: @click="toggleWithFadeAnimation" -->
    <!-- 슬라이드 애니메이션: @click="toggleWithSlideAnimation" -->

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.theme-toggle-btn {
  position: relative;
  overflow: hidden;
  /* CSS 변수 사용 */
  transition: all var(--transition-duration-fast) var(--transition-timing);
}

.theme-toggle-btn:hover {
  transform: scale(1.05);
  background-color: rgb(var(--color-gray-100));
}

.dark .theme-toggle-btn:hover {
  background-color: rgb(var(--color-gray-800));
}

/* 아이콘 애니메이션 */
.theme-toggle-btn :deep(svg) {
  /* CSS 변수 사용 */
  transition: all var(--transition-duration-normal) var(--transition-timing);
  transform-origin: center;
}

.theme-toggle-btn:hover :deep(svg) {
  transform: rotate(360deg) scale(1.1);
}

/* 클릭 시 파동 효과 */
.theme-toggle-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  /* CSS 변수 사용 */
  transition: width var(--transition-duration-slow) var(--transition-timing),
    height var(--transition-duration-slow) var(--transition-timing),
    opacity var(--transition-duration-slow) var(--transition-timing);
  opacity: 0;
  pointer-events: none;
}

.theme-toggle-btn:active::before {
  width: 200px;
  height: 200px;
  opacity: 1;
}

/* 호버 시 글로우 효과 */
.theme-toggle-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg,
      rgba(59, 130, 246, 0.1),
      rgba(139, 92, 246, 0.1),
      rgba(59, 130, 246, 0.1));
  border-radius: inherit;
  opacity: 0;
  /* CSS 변수 사용 */
  transition: opacity var(--transition-duration-normal) var(--transition-timing);
  pointer-events: none;
  z-index: -1;
}

.theme-toggle-btn:hover::after {
  opacity: 1;
}
</style>
