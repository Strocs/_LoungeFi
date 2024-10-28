import { cn } from '@utils/clsxWithTailwindMerge'

export function Header({ children, className }) {
  return (
    <header className={cn('flex w-full max-w-xl items-start justify-between gap-4 py-4', className)}>{children}</header>
  )
}
