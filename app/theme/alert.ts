import type theme from '#build/ui/alert'

export default (): typeof theme => ({
  slots: {
    root: 'relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5',
    wrapper: 'min-w-0 flex-1 flex flex-col',
    title: 'text-sm font-medium',
    description: 'text-sm opacity-90',
    icon: 'shrink-0 size-5',
    avatar: 'shrink-0',
    avatarSize: '2xl',
    actions: 'flex flex-wrap gap-1.5 shrink-0',
    close: 'p-0',
  },
  variants: {
    color: {
      primary: 'blue',
      secondary: '',
      success: '',
      info: '',
      warning: '',
      error: '#abdcda',
      neutral: '',
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
    },
    orientation: {
      horizontal: {
        root: 'items-center',
        actions: 'items-center',
      },
      vertical: {
        root: 'items-start',
        actions: 'items-start mt-2.5',
      },
    },
    title: {
      true: {
        description: 'mt-1',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: {
        root: 'bg-primary text-inverted',
      },
    },
    {
      color: 'primary',
      variant: 'outline',
      class: {
        root: 'text-primary ring ring-inset ring-primary/25',
      },
    },
    {
      color: 'primary',
      variant: 'soft',
      class: {
        root: 'bg-primary/10 text-primary',
      },
    },
    {
      color: 'primary',
      variant: 'subtle',
      class: {
        root: 'bg-primary/10 text-primary ring ring-inset ring-primary/25',
      },
    },
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        root: 'text-inverted bg-inverted',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: {
        root: 'text-highlighted bg-default ring ring-inset ring-default',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        root: 'text-highlighted bg-elevated/50',
      },
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: {
        root: 'text-highlighted bg-elevated/50 ring ring-inset ring-accented',
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
  },
})
