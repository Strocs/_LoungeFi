// import { useState } from 'react'
import { useTaskStore } from '@store'
import { GoPlus } from 'react-icons/go'
import { useAddItem } from '@hooks'
import { motion } from 'framer-motion'

export const AddTask = () => {
	// const [isAIMode, setIsAIMode] = useState(false)

	const addTask = useTaskStore((state) => state.addTask)
	const { ref, isInputOpen, handleSubmit, handleCloseInput, handleShowInput } = useAddItem(addTask)
	return (
		<div className='flex bg-white h-8 text-dark rounded-full absolute bottom-4 left-0 right-0 w-fit mx-auto overflow-hidden first:focus:outline first:focus:outline-blue'>
			{isInputOpen && (
				<motion.form
					initial={{ width: 0 }}
					animate={{ width: 'auto' }}
					transition={{ duration: 0.2 }}
					onBlur={handleCloseInput}
					onSubmit={handleSubmit}
					className='w-full pl-4 py-1'
				>
					<motion.input
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='h-full placeholder:text-sm text-sm focus:outline-none '
						placeholder='What we need to do?'
						name='create-task'
						type='text'
						ref={ref}
					/>
				</motion.form>
			)}
			{/* <button
				className={`my-1 text-white rounded-xl text-xs leading-none shrink-0 w-16 text-center line inline ${!!isAIMode ? 'bg-green' : 'bg-grey'}`}
				onClick={() => setIsAIMode(!isAIMode)}
			>
				{isAIMode ? 'AI Mode' : 'Normal'}
			</button> */}
			<button
				onClick={isInputOpen ? handleSubmit : handleShowInput}
				className='p-1'
			>
				<GoPlus className='mx-auto text-2xl' />
			</button>
		</div>
	)
}
