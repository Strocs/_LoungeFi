import { Link } from 'react-router-dom'
import { tv } from 'tailwind-variants'

export const Button = ({
  size,
  color,
  outline,
  hover,
  shadow,
  className,
  as: Element = 'button',
  ...props
}) => {
  return Element === 'button' ? (
    <button
      className={button({
        color,
        size,
        outline,
        hover,
        shadow,
        className
      })}
      {...props}
    >
      {props.children}
    </button>
  ) : (
    <Link
      className={button({
        color,
        size,
        outline,
        hover,
        shadow,
        className
      })}
      {...props}
    >
      {props.children}
    </Link>
  )
}

const button = tv({
  base: 'rounded-full relative w-fit h-fit group transition-all duration-150 group',
  variants: {
    color: {
      white: 'bg-slate-100 text-dark',
      'text-slate-100': 'bg-transparent text-slate-100',
      blue: 'bg-blue text-slate-100',
      'text-blue': 'bg-slate-100 text-blue',
      red: 'bg-red text-slate-100',
      'text-red': 'bg-slate-100 text-red',
      green: 'bg-green text-slate-100',
      'text-green': 'bg-slate-100 text-green',
      transparent: 'bg-transparent text-transparent',
      grey: 'bg-grey text-slate-100',
      'text-grey': 'bg-slate-100 text-grey'
    },
    hover: {
      white: 'hover:bg-slate-100 hover:text-dark hover:outline-slate-100',
      blue: 'hover:bg-blue hover:text-slate-100 hover:outline-blue',
      red: 'hover:bg-red hover:text-slate-100 hover:outline-red',
      green: 'hover:bg-green hover:text-slate-100 hover:outline-green',
      grey: 'hover:bg-grey hover:text-slate-100 hover:outline-grey'
    },
    shadow: {
      white: 'shadow shadow-slate-100',
      blue: 'shadow shadow-blue',
      red: 'shadow shadow-red',
      green: 'shadow shadow-green',
      grey: 'shadow shadow-grey'
    },
    outline: {
      white: 'outline outline-2 outline-slate-100',
      blue: 'outline outline-2 outline-blue',
      red: 'outline outline-2 outline-red',
      green: 'outline outline-2 outline-green',
      grey: 'outline outline-2 outline-grey'
    },
    size: {
      sm: 'px-2 text-sm',
      md: 'px-3 text-base',
      xl: 'px-4 text-lg',
      'round-sm': 'p-[.125rem]',
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
