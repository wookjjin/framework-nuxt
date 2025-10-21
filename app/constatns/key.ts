import type { InjectionKey } from 'vue'

export const themeKey: InjectionKey<{ theme: Readonly<Ref<string>>, updateTheme: (newTheme: string) => void }> = Symbol('themeKey')
