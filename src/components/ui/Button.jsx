import { tv } from 'tailwind-variants'

export const Button = ({ size, color, outline, hover, shadow, onClick = () => {}, ...props }) => {
  const handleClick = evt => {
    evt.preventDefault()
    onClick()
  }

  return (
    <button
      className={button({
        color,
        size,
        outline,
        hover,
        shadow,
        className: props.className
      })}
      onClick={handleClick}
      {...props}>
      {props.children}
    </button>
  )
}

const button = tv({
  base: 'rounded-full font-medium relative w-fit h-fit group transition-all duration-150 active:opacity-80',
  variants: {
    color: {
      white: 'bg-white text-dark',
      blue: 'bg-blue text-white',
      'text-blue': 'bg-white text-blue',
      red: 'bg-red text-white',
      'text-red': 'bg-white text-red',
      green: 'bg-green text-white',
      'text-green': 'bg-white text-green',
      transparent: 'bg-transparent text-transparent'
    },
    hover: {
      white: 'hover:bg-white hover:text-dark',
      blue: 'hover:bg-blue hover:text-white',
      red: 'hover:bg-red hover:text-white',
      green: 'hover:bg-green hover:text-white'
    },
    shadow: {
      white: 'shadow shadow-white',
      blue: 'shadow shadow-blue',
      red: 'shadow shadow-red',
      green: 'shadow shadow-green'
    },
    outline: {
      white: 'outline outline-2 outline-white',
      blue: 'outline outline-2 outline-blue',
      red: 'outline outline-2 outline-red',
      green: 'outline outline-2 outline-green'
    },
    size: {
      sm: 'px-2 py-[.03125rem] text-xs',
      md: 'px-3 py-[.0625rem] text-sm',
      xl: 'px-4 py-[.125rem] text-base',
      'round-sm': 'p-[2px]',
      'round-md': 'p-1',
      'round-xl': 'p-2'
    },
    animated: {
      true: 'translate-x-[-3px] translate-y-[3px] shadow-none'
    }
  },
  defaultVariants: {
    color: 'white'
  }
})
