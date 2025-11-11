<script lang="ts" setup>
const basicModal = ref(false)
const dismissibleModal = ref(false)
const fullscreenModal = ref(false)
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Modal" />

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <!-- Section 1: Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold text-dimmed">Modal</span>은 사용자에게 중요한 메시지나
            추가 입력을 요청할 때 사용됩니다.<br>
            기본 모달은 제목(<span class="font-semibold text-dimmed">title</span>)과 설명(<span class="font-semibold text-dimmed">description</span>)을
            표시하며,
            닫기 버튼(<span class="font-semibold text-dimmed">close</span>)으로 제어할 수 있습니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiButton
              label="Open Basic Modal"
              color="primary"
              @click="basicModal = true"
            />
          </div>

          <UiModal
            v-model:open="basicModal"
            title="기본 모달"
            description="이 모달은 기본 구조를 보여줍니다."
          >
            <template #body>
              <p class="text-gray-600 text-sm">
                기본적으로 헤더, 설명, 본문, 푸터 영역을 지원합니다.
              </p>
            </template>

            <template #footer>
              <div class="flex justify-end gap-2">
                <UiButton
                  label="닫기"
                  color="neutral"
                  variant="subtle"
                  @click="basicModal = false"
                />
                <UiButton
                  label="확인"
                  color="primary"
                  @click="basicModal = false"
                />
              </div>
            </template>
          </UiModal>
        </section>

        <!-- Section 2: Dismissible -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Dismissible
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold text-dimmed">dismissible</span> 속성을 통해 사용자가
            배경을 클릭하거나 ESC 키로 모달을 닫을 수 있는지 설정할 수 있습니다.<br>
            이 기능은 단순 알림용 모달이나 사용자 피드백을 유도할 때 유용합니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiButton
              label="Open Non-dismissible Modal"
              color="primary"
              @click="dismissibleModal = true"
            />
          </div>

          <UiModal
            v-model:open="dismissibleModal"
            title="닫을 수 없는 모달"
            description="이 모달은 dismissible=false 설정으로 배경 클릭 시 닫히지 않습니다."
            :dismissible="false"
          >
            <template #body>
              <p class="text-gray-600 text-sm">
                ESC 키나 배경 클릭으로 닫을 수 없습니다. 오직 버튼으로만 닫을 수 있습니다.
              </p>
            </template>

            <template #footer>
              <div class="flex justify-end">
                <UiButton
                  label="확인"
                  color="primary"
                  @click="dismissibleModal = false"
                />
              </div>
            </template>
          </UiModal>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Fullscreen
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold text-dimmed">fullscreen</span> 속성을 활성화하면
            화면 전체를 덮는 형태의 모달을 표시할 수 있습니다.<br>
            모바일 환경이나 대형 폼, 상세 페이지 표시 시 유용합니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiButton
              label="Open Fullscreen Modal"
              color="primary"
              @click="fullscreenModal = true"
            />
          </div>

          <UiModal
            v-model:open="fullscreenModal"
            title="전체 화면 모달"
            description="이 모달은 화면 전체를 덮는 형태입니다."
            fullscreen
          >
            <template #body>
              <p class="text-gray-600 text-sm mb-4">
                전체 화면 모달은 복잡한 작업이나 큰 데이터 입력에 적합합니다.
              </p>
            </template>

            <template #footer>
              <div class="flex justify-end gap-2">
                <UiButton
                  label="닫기"
                  color="neutral"
                  variant="subtle"
                  @click="fullscreenModal = false"
                />
              </div>
            </template>
          </UiModal>
        </section>
      </div>
    </div>
  </div>
</template>
