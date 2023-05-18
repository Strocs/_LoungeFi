export function Title({ name = 'Ignacio' }) {
	return (
		<div className='text-white grid gap-1'>
			<h1 className='text-3xl font-extralight leading-none inline-block'>
				task<b className='font-extrabold'>Done</b>_
			</h1>
			<span className='-mt-1 text-xs font-light block text-grey'>
				Wellcome {name}
			</span>
		</div>
	)
}
