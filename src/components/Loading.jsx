import { motion } from 'framer-motion'

export const Loading = ({ size = 32 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.circle
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1
        }}
        transition={{
          type: 'spring',
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        cx='16'
        cy='16'
        r='14.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M23.7016 10.6864C23.8779 10.8432 23.9846 11.0636 23.9985 11.299C24.0123 11.5345 23.9321 11.7659 23.7755 11.9422L14.2826 22.6224C14.1991 22.7164 14.0967 22.7916 13.982 22.8431C13.8673 22.8946 13.743 22.9212 13.6173 22.9212C13.4916 22.9212 13.3674 22.8946 13.2527 22.8431C13.138 22.7916 13.0356 22.7164 12.9521 22.6224L8.20561 17.2823C8.05797 17.1047 7.98515 16.8767 8.00252 16.6464C8.0199 16.4161 8.12611 16.2016 8.29872 16.0482C8.47133 15.8947 8.69683 15.8144 8.92757 15.8241C9.15831 15.8339 9.37623 15.9329 9.53529 16.1004L12.8695 19.8512C13.2673 20.2987 13.9665 20.2987 14.3643 19.8512L22.4458 10.7594C22.6028 10.5833 22.8232 10.4767 23.0586 10.463C23.2941 10.4494 23.5254 10.5297 23.7016 10.6864Z'
        fill='white'
      />
    </motion.svg>
  )
}
