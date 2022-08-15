import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity } from '../../../app/models/activity'
import AnimatedButton from '../../../components/AnimatedButton'
import ActivityDetails from '../details/ActivityDetails'

type Props = {
  activity: Activity
  handleCreateOrEditActivity: (activity: Activity) => void
  handleDeleteActivity: (id: string) => void
}

function ActivityItem({ activity, handleCreateOrEditActivity, handleDeleteActivity }: Props) {
  const [screw, setScrew] = useState(false)
  return (
    <li className='flex relative flex-col lg:flex-row transition-all ease-linear duration-500'>
      <motion.div className='flex-1 flex-grow min-w-300 z-10 self-start p-4 shadow-sm rounded-md border bg-white mb-2 flex flex-col w-full'>
        <header className='mb-4'>
          <h1 className='text-xl font-medium'>{activity.title}</h1>
          <div className='text-sm text-gray-400'>{activity.date.toString()}</div>
        </header>
        <div className='font-medium mb-4'>
          <p className='mb-1 '>{activity.description}</p>
          <div className='text-sm text-gray-400'>
            {activity.city}, {activity.venue}
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='font-semibold text-sm border-solid border p-2 rounded-lg'>
            {activity.category}
          </div>
          <AnimatedButton
            onClick={() => setScrew((prev) => !prev)}
            titles={['Close', 'View']}
            isFirstTitle={screw}
          />
        </div>
      </motion.div>
      <AnimatePresence>
        {screw && (
          <ActivityDetails
            handleCreateOrEditActivity={handleCreateOrEditActivity}
            activity={activity}
            handleDeleteActivity={handleDeleteActivity}
          />
        )}
      </AnimatePresence>
    </li>
  )
}

export default ActivityItem
