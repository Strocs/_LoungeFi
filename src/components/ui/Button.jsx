import { tv } from 'tailwind-variants'

export const Button = ({ padding, size, color, outline, circle, shadow, ...props }) => {
  const handleClick = evt => {
    evt.preventDefault()
    props.onClick()
  }

  return (
    <button
      className={button({
        color,
        size,
        padding,
        outline,
        circle,
        shadow,
        disabled: props.disabled,
        className: props.className
      })}
      onClick={handleClick}
      {...props}>
      {props.children}
    </button>
  )
}

const button = tv({
  base: 'rounded-full font-medium',
  variants: {
    color: {
      primary:
        'bg-white text-dark shadow-blue outline-blue hover:bg-blue hover:text-white hover:shadow-white',
      transparent:
        'bg-transparent text-transparent outline-white shadow-blue hover:bg-blue hover:text-white',
      done: 'bg-green text-white shadow-white',
      active: 'bg-blue text-white shadow-white',
      danger: 'bg-white text-red shadow-red hover:bg-red hover:text-white hover:shadow-white'
    },
    shadow: {
      true: 'shadow',
    },
    circle: {
      true: 'p-[.125rem]'
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm'
    },
    padding: {
      true: 'px-2 py-[.031rem]'
    },
    outline: {
      true: 'outline outline-2'
    },
    animated: {
      true: 'translate-x-[-3px] translate-y-[3px] shadow-none'
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    padding: false,
    outline: false,
  }
})
