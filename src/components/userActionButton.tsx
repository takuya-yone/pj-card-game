import type { UserActionType } from '@/types/userActionType'
import { cn } from '@/lib/utils'

type UserActionButtonProps = {
  action: UserActionType
  onClick: () => void
  className?: string
}

export const UserActionButton = (props: UserActionButtonProps) => {
  const actionImages: Record<string, string> = {
    draw: '/draw.webp',
    multiDraw: '/multi-draw.webp',
    shuffle: '/shuffle.webp',
    reset: '/reset.webp',
  }

  return (
    <div
      className={cn('max-w-50 hover:scale-110 transition-transform duration-200', props.className)}
    >
      <button onClick={props.onClick}>
        <img src={actionImages[props.action]} alt={props.action} />
      </button>
    </div>
  )
}
