import { useState } from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
	base: 'flex items-center rounded-full font-bold shadow-[-3px_3px_0_0] tracking-tight transition-all duration-200',
	variants: {
		color: {
			primary: 'bg-white text-dark shadow-blue hover:bg-blue hover:text-white hover:shadow-white',
			transparent: 'bg-transparent text-transparent shadow-blue hover:bg-blue hover:text-white',
			done: 'bg-green text-white shadow-blue',
			active: 'bg-blue text-white shadow-white',
			danger: 'bg-white text-red shadow-red hover:bg-red hover:text-white hover:shadow-white',
		},
		disabled: {
			true: 'bg-transparent text-white shadow-none outline outline-[.1rem] outline-grey hover:bg-transparent',
		},
		size: {
			sm: 'text-[10px]',
			md: 'text-[12px]',
			lg: 'text-2',
		},
		padding: {
			none: 'p-0',
			sm: 'p-[.125rem]',
			md: 'px-2 py-[.031rem]',
		},
		border: {
			none: 'border-none',
			thin: 'border',
			thick: 'border border-2 border-white',
		},
		animated: {
			true: 'translate-x-[-3px] translate-y-[3px] shadow-[0_0_0_0]',
			false: '',
		},
	},
	defaultVariants: {
		size: 'sm',
		color: 'primary',
		padding: 'md',
		border: 'none',
	},
})

export const Button = ({ children, padding = '', size = '', color = '', border = '', onClick = () => {}, className = '', ...props }) => {
	const [isAnimationStart, setIsAnimationStart] = useState(false)

	const animationShoot = () => {
		setIsAnimationStart(true)
		setTimeout(() => {
			setIsAnimationStart(false)
		}, 200)
	}

	const handleClick = () => {
		if (props.animated) {
			animationShoot()
		}
		onClick()
	}

	return (
		<button
			className={`${button({ color, size, padding, border, disabled: props.disabled, animated: isAnimationStart })} ${className}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
