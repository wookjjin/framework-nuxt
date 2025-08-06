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

</style>
