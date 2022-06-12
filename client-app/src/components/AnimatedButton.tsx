import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  onClick: () => void
  titles: [string, string]
  isFirstTitle: boolean
  colors?: [string, string]
}

function AnimatedButton({ onClick, titles, isFirstTitle, colors = ['#EC4899', '#3B82F6'] }: Props) {
  return (
    <motion.button
      onClick={onClick}
      type='button'
      className='relative text-white bg-blue-500 font-medium px-6 rounded-md group overflow-hidden cursor-pointer'
      animate={{ background: isFirstTitle ? colors[0] : colors[1] }}
    >
      <motion.span
        className='absolute w-64 h-64 mt-12 group-hover:-rotate-45  group-hover:-mt-24 transition-all ease-linear duration-500 top-0 left-0 bg-pink-500'
        animate={{ background: isFirstTitle ? colors[1] : colors[0] }}
      />
      <AnimatePresence>
        {isFirstTitle ? (
          <motion.div
            key='close-text'
            className='relative w-10'
            animate={{ x: [-100, 0], transition: { duration: 0.7 } }}
            exit={{ x: -100, position: 'absolute', transition: { duration: 0.7 } }}
          >
            {titles[0]}
          </motion.div>
        ) : (
          <motion.div
            key='view-text'
            className='relative w-10'
            animate={{ x: [100, 0], transition: { duration: 0.7 } }}
            exit={{ x: 100, position: 'absolute', transition: { duration: 0.7 } }}
          >
            {titles[1]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default AnimatedButton
