export const TaskInfoButton = ({ text, icon, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex items-center justify-center gap-1 w-full p-1 bg-c-box text-c-text outline-1 outline-dashed hover:bg-c-text hover:text-c-box focus:bg-c-box focus:text-c-text ${
        text === 'Close' ? 'max-w-[4em] self-end' : ''
      }`}
    >
      {text} {icon}
    </button>
  )
}
