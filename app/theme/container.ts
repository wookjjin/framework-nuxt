import type theme from '#build/ui/container'

export default (): typeof theme => ({
  base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8',
})
