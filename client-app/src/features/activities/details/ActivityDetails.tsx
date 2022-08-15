import { motion } from 'framer-motion'
import { useState } from 'react'
import { Activity } from '../../../app/models/activity'
import ActivityForm from '../form/ActivityForm'

type Props = {
  activity: Activity
  handleCreateOrEditActivity: (activity: Activity) => void
  handleDeleteActivity: (id: string) => void
}

function ActivityDetails({ activity, handleCreateOrEditActivity, handleDeleteActivity }: Props) {
  const [edit, setEdit] = useState(false)
  return (
    <motion.div
      key='details'
      className='flex items-center flex-wrap justify-start shadow-sm rounded-md border p-4 bg-white mb-2 flex-grow lg:flex-grow-[2] overflow-hidden'
      animate={{ y: [-200, 0], opacity: [0, 1], transition: { duration: 0.7 } }}
      exit={{ y: -200, opacity: 0, transition: { duration: 0.4 } }}
    >
      {edit ? (
        <ActivityForm
          onCancel={() => setEdit(false)}
          title='Edit'
          selectedActivity={activity}
          handleCreateOrEditActivity={handleCreateOrEditActivity}
        />
      ) : (
        <>
          <div className='w-96 rounded-2xl overflow-hidden ml-4 flex-1'>
            <img
              className=''
              src={`/assets/categoryImages/${activity.category}.jpg`}
              alt='category'
            />
          </div>
          <div className='ml-8 flex flex-col justify-between h-full py-4 flex-1'>
            <header className='flex flex-col justify-start items-start mb-2'>
              <div className='text-xl font-medium'>{activity.title}</div>
              <div className='text-sm text-gray-400 '>{activity.date.toString()}</div>
            </header>
            <p className='font-medium mb-1'>{activity.description}</p>
            <div className='flex justify-end mr-4 gap-1'>
              <button
                className='text-blue-400 px-8 py-2 border border-blue-400 rounded-md font-medium hover:bg-blue-200'
                type='button'
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
              <button
                className='text-red-400 px-8 py-2 border border-red-400 rounded-md font-medium hover:bg-pink-200'
                type='button'
                onClick={() => handleDeleteActivity(activity.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default ActivityDetails
