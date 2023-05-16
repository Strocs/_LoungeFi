import { tv } from 'tailwind-variants'

const button = tv({
	base: 'rounded-full font-bold shadow-[-3px_3px_0_0] tracking-tight',
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
			md: 'text-1',
			lg: 'text-2',
		},
		padding: {
			none: 'p-[.125rem]',
			normal: 'px-2 py-[.031rem]',
		},
		border: {
			none: 'border-none',
			thin: 'border',
			thick: 'border border-2 border-white',
		},
	},
	defaultVariants: {
		size: 'sm',
		color: 'primary',
		padding: 'normal',
		border: 'none',
	},
})

export const Button = ({ children, padding, size, color, border, disabled, onClick, ...props }) => {
	return (
		<button className={button({ color, size, padding, border, disabled })} onClick={onClick}>
			{children}
		</button>
	)
}
