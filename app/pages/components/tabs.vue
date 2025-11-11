<script lang="ts" setup>
const basicItems = ref([
  { label: 'Home', icon: 'i-lucide-house', content: 'This is the Home tab content.' },
  { label: 'Profile', icon: 'i-lucide-user', content: 'This is the Profile tab content.' },
  { label: 'Settings', icon: 'i-lucide-settings', content: 'This is the Settings tab content.' },
])

const colorItems = ref([
  { label: 'Primary', content: 'Primary color tabs' },
  { label: 'Secondary', content: 'Secondary color tabs' },
  { label: 'Info', content: 'Info color tabs' },
  { label: 'Success', content: 'Success color tabs' },
  { label: 'Warning', content: 'Warning color tabs' },
  { label: 'Neutral', content: 'Neutral color tabs' },
  { label: 'Error', content: 'Error color tabs' },
])

const sizeItems = ref([
  { label: 'Small', content: 'Small size tabs' },
  { label: 'Medium', content: 'Medium size tabs' },
  { label: 'Large', content: 'Large size tabs' },
])

const variantItems = ref([
  { label: 'Pill', content: 'Pill variant' },
  { label: 'Link', content: 'Link variant' },
])

const orientationItems = ref([
  { label: 'Vertical 1', content: 'First vertical tab' },
  { label: 'Vertical 2', content: 'Second vertical tab' },
])

const formItems = [
  {
    label: 'Account',
    description: 'Manage your account settings here.',
    icon: 'i-lucide-user',
    slot: 'account' as const,
  },
  {
    label: 'Password',
    description: 'Change your password securely.',
    icon: 'i-lucide-lock',
    slot: 'password' as const,
  },
]

const state = reactive({
  name: '',
  username: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Tabs" />

    <div class="flex flex-col mx-6 px-6 gap-10 overflow-y-auto">
      <!-- 1. Basic -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Basic
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          기본적인 Tabs 예제입니다. 각 탭은 <span class="font-semibold dark:text-dimmed">label</span>과 <span
            class="font-semibold dark:text-dimmed"
          >icon, content</span>로 구성됩니다.
        </p>
        <UiTabs :items="basicItems" />
      </section>

      <!-- 2. Color -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Color
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">color</span> 속성을 사용하여 탭의 색상을 변경할 수 있습니다.
        </p>
        <div class="flex flex-wrap gap-6">
          <UiTabs
            :items="colorItems"
            color="primary"
            default-value="0"
          />
          <UiTabs
            :items="colorItems"
            color="secondary"
            default-value="1"
          />
          <UiTabs
            :items="colorItems"
            color="info"
            default-value="2"
          />
          <UiTabs
            :items="colorItems"
            color="success"
            default-value="3"
          />
          <UiTabs
            :items="colorItems"
            color="warning"
            default-value="4"
          />
          <UiTabs
            :items="colorItems"
            color="neutral"
            default-value="5"
          />
          <UiTabs
            :items="colorItems"
            color="error"
            default-value="6"
          />
        </div>
      </section>

      <!-- 3. Variant -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          3. Variant
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">variant</span> 속성으로 Tabs의 스타일(모양)을 변경할 수 있습니다.
        </p>
        <div class="flex flex-col gap-4">
          <UiTabs
            :items="variantItems"
            variant="pill"
          />
          <UiTabs
            :items="variantItems"
            variant="link"
            default-value="1"
          />
        </div>
      </section>

      <!-- 4. Size -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          4. Size
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">size</span> 속성으로 탭 버튼의 크기를 조절할 수 있습니다.
        </p>
        <div class="flex flex-wrap gap-6">
          <UiTabs
            :items="sizeItems"
            size="sm"
          />
          <UiTabs
            :items="sizeItems"
            size="md"
            default-value="1"
          />
          <UiTabs
            :items="sizeItems"
            size="lg"
            default-value="2"
          />
        </div>
      </section>

      <!-- 5. Orientation -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          5. Orientation
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">orientation</span>을 <span
            class="font-semibold dark:text-dimmed"
          >"vertical"</span>로 설정하면 세로형 탭으로 변경됩니다.
        </p>
        <div class="flex gap-8">
          <UiTabs
            :items="orientationItems"
            orientation="vertical"
          />
        </div>
      </section>

      <!-- 6. Slot -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          6. Dynamic Slot
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">slot</span> 속성을 지정하면 탭마다 고유한 콘텐츠를 개별 슬롯으로 렌더링할 수 있습니다.
        </p>

        <UiTabs :items="formItems">
          <template #account="{ item }">
            <p class="text-gray-600 mb-4 dark:text-muted">
              {{ item.description }}
            </p>
            <UForm
              :state="state"
              class="flex flex-col gap-4"
            >
              <UFormField
                label="Name"
                name="name"
              >
                <UInput v-model="state.name" />
              </UFormField>
              <UFormField
                label="Username"
                name="username"
              >
                <UInput v-model="state.username" />
              </UFormField>
              <UButton
                label="Save changes"
                variant="soft"
                class="self-end"
              />
            </UForm>
          </template>

          <template #password="{ item }">
            <p class="text-gray-600 mb-4">
              {{ item.description }}
            </p>
            <UForm
              :state="state"
              class="flex flex-col gap-4"
            >
              <UFormField
                label="Current Password"
                name="current"
              >
                <UInput
                  v-model="state.currentPassword"
                  type="password"
                />
              </UFormField>
              <UFormField
                label="New Password"
                name="new"
              >
                <UInput
                  v-model="state.newPassword"
                  type="password"
                />
              </UFormField>
              <UFormField
                label="Confirm Password"
                name="confirm"
              >
                <UInput
                  v-model="state.confirmPassword"
                  type="password"
                />
              </UFormField>
              <UButton
                label="Change password"
                variant="soft"
                class="self-end"
              />
            </UForm>
          </template>
        </UiTabs>
      </section>
    </div>
  </div>
</template>
