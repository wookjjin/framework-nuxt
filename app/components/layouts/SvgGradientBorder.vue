<script lang="ts" setup>
const {
  color = 'var(--ui-primary)',
  customClass,
  gradientOpacity = 0.22,
  offsetMiddle = 0.395,
} = defineProps<{
  color?: string
  customClass?: string
  gradientOpacity?: number
  offsetMiddle?: number | string
}>()

// const resolvedColor = `var(${color})`

function isValidCssColor(color: string): boolean {
  // var() 형태는 항상 허용
  if (color.startsWith('var('))
    return true

  const s = new Option().style
  s.color = ''
  s.color = color
  return s.color !== ''
}

const resolvedColor = computed(() => {
  const c = color?.trim()

  if (!c || c === '') {
    return 'currentColor'
  }

  if (isValidCssColor(c)) {
    return c
  }

  if (import.meta.env.MODE === 'development') {
    console.warn(
      `[SvgGradientBorder] '${c}'는 유효한 CSS 색상이 아닙니다. 'currentColor'로 대체됩니다.`,
    )
  }

  return 'currentColor'
})
</script>

<template>
  <svg
    viewBox="0 0 1440 181"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="pointer-events-none absolute w-full -top-px transition-all shrink-0 -z-10 duration-400"
    :class="[
      customClass, `text-[${color}]`,
    ]"
  >
    <mask
      id="path-1-inside"
      fill="white"
    >
      <path d="M0 0H1440V181H0V0Z" />
    </mask>

    <!-- Background gradient -->
    <path
      d="M0 0H1440V181H0V0Z"
      fill="url(#paint0)"
      :fill-opacity="gradientOpacity"
    />

    <!-- Horizontal gradient -->
    <path
      d="M0 2H1440V-2H0V2Z"
      fill="url(#paint1)"
      mask="url(#path-1-inside)"
    />

    <defs>
      <!-- Vertical gradient -->
      <linearGradient
        id="paint0"
        x1="720"
        y1="0"
        x2="720"
        y2="181"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="resolvedColor" />
        <stop
          offset="1"
          :stop-color="resolvedColor"
          stop-opacity="0"
        />
      </linearGradient>

      <!-- Horizontal gradient -->
      <linearGradient
        id="paint1"
        x1="0"
        y1="90.5"
        x2="1440"
        y2="90.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          :stop-color="resolvedColor"
          stop-opacity="0"
        />
        <stop
          :offset="offsetMiddle"
          :stop-color="resolvedColor"
        />
        <stop
          offset="1"
          :stop-color="resolvedColor"
          stop-opacity="0"
        />
      </linearGradient>
    </defs>
  </svg>
</template>
