<script lang="ts" setup>
import { useScriptNpm, useScriptTriggerElement } from '#imports'

// JSConfetti 타입 정의
interface JSConfettiApi {
  addConfetti: (options: { emojis: string[] }) => void
}

// Window 인터페이스 확장
declare global {
  interface Window {
    JSConfetti: new () => JSConfettiApi
  }
}

const mouseOverEl = ref()
const { onLoaded } = useScriptNpm<{ JSConfetti: new () => JSConfettiApi }>({
  packageName: 'js-confetti',
  file: 'dist/js-confetti.browser.js',
  version: '0.12.0',
  scriptOptions: {
    trigger: useScriptTriggerElement({
      trigger: 'mouseover',
      el: mouseOverEl,
    }),
    bundle: true,
    use() {
      return { JSConfetti: window.JSConfetti }
    },
  },
})

function addConfetti(options: { emojis: string[] }) {
  onLoaded(({ JSConfetti }) => {
    const confetti = new JSConfetti()
    confetti.addConfetti(options)
  })
}

addConfetti({ emojis: ['L', 'O', 'A', 'D', 'E', 'D'] })
</script>

<template>
  <div>
    <button
      @click="
        () => addConfetti({ emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'] })
      "
    >
      Add Confetti
    </button>
    <div ref="mouseOverEl">
      <h1>Hover over me to load the confetti</h1>
    </div>
    <div>
      <NuxtLink to="/">
        Back
      </NuxtLink>
    </div>
  </div>
</template>
