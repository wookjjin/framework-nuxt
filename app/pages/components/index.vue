<script setup lang="ts">
const components = [
  { name: 'Input', desc: '사용자 입력 필드 컴포넌트', link: '/components/input' },
  { name: 'Button', desc: '다양한 스타일의 버튼', link: '/components/button' },
  { name: 'Checkbox', desc: '체크박스 UI', link: '/components/checkbox' },
  { name: 'Select', desc: '드롭다운 선택 UI', link: '/components/select' },
  { name: 'Modal', desc: '팝업 및 다이얼로그', link: '/components/modal' },
  { name: 'Card', desc: '정보 카드 컴포넌트', link: '/components/card' },
  { name: 'Tabs', desc: '탭 전환 UI', link: '/components/tabs' },
  { name: 'Separator', desc: '구분선 컴포넌트', link: '/components/separator' },
  { name: 'Alert', desc: '경고창 컴포넌트', link: '/components/alert' },
  { name: 'Badge', desc: '다양한 스타일일의 뱃지', link: '/components/badge' },
  { name: 'Progress', desc: '프로그레스 컴포넌트', link: '/components/progress' },
]
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Components" />

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
          <NuxtLink
            v-for="(component, index) in components"
            :key="index"
            :to="component.link"
            class="group block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
          >
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                {{ component.name }}
              </h2>
            </div>
            <p class="text-gray-500 text-sm">
              {{ component.desc }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
