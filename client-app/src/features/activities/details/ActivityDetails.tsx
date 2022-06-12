import { motion, AnimatePresence } from 'framer-motion'
import { Activity } from '../../../app/models/activity'

type Props = {
  activity: Activity
}

function ActivityDetails({ activity }: Props) {
  return (
    <motion.div
      key='details'
      className='flex items-center justify-start  shadow-sm rounded-md border bg-white mb-2 pr-4 flex-1 flex-grow-[2]'
    >
      <div className='w-96 rounded-2xl overflow-hidden ml-4 flex-1'>
        <img className='' src={`/assets/categoryImages/${activity.category}.jpg`} alt='category' />
      </div>
      <div className='ml-8 flex flex-col justify-between h-full py-4 flex-1'>
        <header className='flex flex-col justify-start items-start mb-2'>
          <div className='text-xl font-medium'>{activity.title}</div>
          <div className='text-sm text-gray-400 '>{activity.date.toString()}</div>
        </header>
        <p className='font-medium mb-1'>{activity.description}</p>
        <div className='flex justify-end mr-4'>
          <button
            className='text-blue-400 px-8 py-2 border border-blue-400 rounded-md font-medium hover:bg-pink-200'
            type='button'
          >
            Edit
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ActivityDetails
