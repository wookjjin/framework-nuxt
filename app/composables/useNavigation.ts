import type { ContentNavigationItem } from '@nuxt/content'

export const useNavigation = (navigationData: Ref<ContentNavigationItem[]>) => {
  const navigation = computed<ContentNavigationItem[]>(() => {
    const docsItem = navigationData.value?.find(item => item.title === 'Docs')
    return docsItem?.children || []
  })

  // 특정 경로의 네비게이션 아이템 찾기
  const findNavigationItem = (path: string): ContentNavigationItem | null => {
    const findInChildren = (items: ContentNavigationItem[]): ContentNavigationItem | null => {
      for (const item of items) {
        if (item.path === path) {
          return item
        }
        if (item.children) {
          const found = findInChildren(item.children)
          if (found)
            return found
        }
      }
      return null
    }

    return findInChildren(navigation.value)
  }

  // 현재 활성 네비게이션 아이템 가져오기
  const getActiveNavigationItem = () => {
    const route = useRoute()
    return findNavigationItem(route.path)
  }

  // 브레드크럼 생성
  const getBreadcrumbs = (path: string): ContentNavigationItem[] => {
    const breadcrumbs: ContentNavigationItem[] = []

    const findPath = (items: ContentNavigationItem[], targetPath: string, currentPath: ContentNavigationItem[] = []): boolean => {
      for (const item of items) {
        const newPath = [...currentPath, item]

        if (item.path === targetPath) {
          breadcrumbs.push(...newPath)
          return true
        }

        if (item.children && findPath(item.children, targetPath, newPath)) {
          return true
        }
      }
      return false
    }

    findPath(navigation.value, path)
    return breadcrumbs
  }

  // 현재 경로 기준 브레드크럼
  const getCurrentBreadcrumbs = () => {
    const route = useRoute()
    return getBreadcrumbs(route.path)
  }

  return {
    navigation,
    findNavigationItem,
    getActiveNavigationItem,
    getBreadcrumbs,
    getCurrentBreadcrumbs,
  }
}
