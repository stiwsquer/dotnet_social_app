import { motion } from 'framer-motion'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Activity } from '../../../app/models/activity'

type Props = {
  onCancel: () => void
  title: string
  selectedActivity?: Activity
  handleCreateOrEditActivity: (activity: Activity) => void
}

function ActivityForm({ onCancel, title, selectedActivity, handleCreateOrEditActivity }: Props) {
  const [activity, setActivity] = useState(
    selectedActivity ?? {
      id: '',
      title: '',
      category: '',
      description: '',
      date: '',
      city: '',
      venue: ''
    }
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    handleCreateOrEditActivity(activity)
    onCancel()
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setActivity({ ...activity, [name]: value })
  }

  return (
    <motion.div
      className='flex flex-col w-full justify-around bg-blue-200 p-4 rounded-lg'
      animate={{ y: [-500, 0], opacity: [0, 1], transition: { duration: 0.7 } }}
    >
      <h1 className='px-2 pb-4 font-semibold text-xl text-purple-600'>{title}</h1>
      <form className='grid grid-cols-1 gap-2 w-full' onSubmit={handleSubmit} autoComplete='off'>
        <input
          name='title'
          className='input-text'
          type='text'
          placeholder='Title'
          value={activity.title}
          onChange={handleInputChange}
        />
        <textarea
          className='input-text'
          name='description'
          placeholder='Description'
          value={activity.description}
          onChange={handleInputChange}
        />
        <input
          name='category'
          className='input-text'
          type='text'
          placeholder='Category'
          value={activity.category}
          onChange={handleInputChange}
        />
        <input
          name='date'
          className='input-text'
          type='text'
          placeholder='Date'
          value={activity.date}
          onChange={handleInputChange}
        />
        <input
          name='city'
          className='input-text'
          type='text'
          placeholder='City'
          value={activity.city}
          onChange={handleInputChange}
        />
        <input
          name='venue'
          className='input-text'
          type='text'
          placeholder='Venue'
          value={activity.venue}
          onChange={handleInputChange}
        />

        <div className='flex justify-end p-2 '>
          <button
            className='bg-red-500 px-4 py-2 rounded-l-lg text-white font-semibold'
            type='button'
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            className='bg-blue-500 px-4 py-2 rounded-r-lg text-white font-semibold'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ActivityForm
