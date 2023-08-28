import { tv } from 'tailwind-variants'

export const Button = ({ padding, size, color, border, ...props }) => {
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
        border,
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
  base: 'rounded-full font-bold shadow tracking-tight transition-all duration-100',
  variants: {
    color: {
      primary:
        'bg-white text-dark shadow-solid shadow-blue hover:bg-blue hover:text-white hover:shadow-white',
      transparent:
        'bg-transparent text-transparent  shadow-blue hover:bg-blue hover:text-white focus:bg-transparent focus:text-transparent',
      done: 'bg-green text-white shadow-blue',
      active: 'bg-blue text-white shadow-white',
      danger: 'bg-white text-red shadow-red hover:bg-red hover:text-white hover:shadow-white'
    },
    disabled: {
      true: 'bg-transparent text-white shadow-none outline outline-[.1rem] outline-grey hover:bg-transparent'
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-lg'
    },
    padding: {
      none: 'p-0',
      sm: 'p-[.125rem]',
      md: 'px-2 py-[.031rem]'
    },
    border: {
      none: 'border-none',
      thin: 'border',
      thick: 'border-2 border-white'
    },
    animated: {
      true: 'translate-x-[-3px] translate-y-[3px] shadow-none'
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    padding: 'md',
    border: 'none'
  }
})
