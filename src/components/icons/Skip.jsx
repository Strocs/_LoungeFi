export const Skip = ({ size = '28', reverse }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			className={reverse && 'rotate-180'}
		>
			<path
				d='M18 7v10M6.972 5.267A.6.6 0 006 5.738v12.524a.6.6 0 00.972.47l7.931-6.261a.6.6 0 000-.942L6.972 5.267z'
				fill='currentColor'
				stroke='currentColor'
				strokeWidth='1.6'
				strokeLinecap='square'
				strokeLinejoin='square'
			></path>
		</svg>
	)
}
