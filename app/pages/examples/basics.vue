<!-- ScriptSetupExercises.vue -->
<script lang="ts" setup>
// ✅ 1. Script Setup
// TODO: message 변수를 선언하고 화면에 출력하세요.

// ✅ 2. Reactivity
// TODO: ref를 이용해 count 변수를 선언하고 버튼 클릭 시 1씩 증가하도록 하세요.

// ✅ 3. DefineModel
// TODO: defineModel을 사용해 부모-자식 간 데이터 바인딩을 구현하세요.

// ✅ 4. Props & Emits
// TODO: 자식 컴포넌트에서 props로 데이터를 받고, 클릭 시 emit 이벤트를 발생시키세요.

// ✅ 5. Computed
// TODO: computed를 사용해 firstName과 lastName을 합쳐 fullName을 표시하세요.

// ✅ 6. Watch
// TODO: count 값이 변경될 때 콘솔에 로그가 출력되도록 watch를 작성하세요.

// ✅ 7. Lifecycle
// TODO: onMounted와 onUnmounted 훅을 사용하여 컴포넌트의 마운트/언마운트 시 로그를 출력하세요.

// ✅ 8. Component
// TODO: 자식 컴포넌트를 import하여 부모 컴포넌트에서 렌더링하세요.

// ✅ 9. Router
// TODO: router-link를 사용해 다른 페이지로 이동하는 버튼을 만드세요.
</script>

<template>
  <div class="exercise-wrapper">
    <section>
      <h2 class="text-info">
        1. Script Setup
      </h2>
      <!-- TODO: message를 보여주세요. -->
    </section>

    <section>
      <h2 class="text-info">
        2. Reactivity
      </h2>
      <!-- TODO: count를 표시하고 증가 버튼을 만드세요. -->
    </section>

    <section>
      <h2 class="text-info">
        3. DefineModel
      </h2>
      <!-- TODO: v-model을 사용하는 입력 필드를 만드세요. -->
    </section>

    <section>
      <h2 class="text-info">
        4. Props & Emits
      </h2>
      <!-- TODO: 자식 컴포넌트를 불러와 props와 emit을 테스트하세요. -->
    </section>

    <section>
      <h2 class="text-info">
        5. Computed
      </h2>
      <!-- TODO: fullName을 표시하세요. -->
    </section>

    <section>
      <h2 class="text-info">
        6. Watch
      </h2>
      <!-- TODO: count가 변경될 때 로그가 찍히는지 확인하세요. -->
    </section>

    <section>
      <h2 class="text-info">
        7. Lifecycle
      </h2>
      <!-- TODO: onMounted, onUnmounted를 테스트하세요. -->
    </section>

    <section>
      <h2 class="text-info">
        8. Component
      </h2>
      <!-- TODO: 자식 컴포넌트를 렌더링하세요. -->
    </section>

    <section>
      <h2 class="text-info">
        9. Router
      </h2>
      <!-- TODO: router-link를 사용하여 페이지 이동 버튼을 추가하세요. -->
    </section>
  </div>
</template>

<style scoped>
.exercise-wrapper {
  padding: 2rem;
  color: #333;
}

h2 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

section {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}
</style>
