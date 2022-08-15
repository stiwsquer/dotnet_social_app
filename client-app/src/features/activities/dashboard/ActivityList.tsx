import { Activity } from '../../../app/models/activity'
import ActivityItem from './ActivityItem'

type Props = {
  activities: Activity[]
  handleCreateOrEditActivity: (activity: Activity) => void
  handleDeleteActivity: (id: string) => void
}

function ActivityList({ activities, handleCreateOrEditActivity, handleDeleteActivity }: Props) {
  if (!activities.length) return <div>Fetching activities...</div>

  return (
    <ul className='flex flex-col flex-auto gap-4'>
      {activities.map((activity) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          handleCreateOrEditActivity={handleCreateOrEditActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      ))}
    </ul>
  )
}

export default ActivityList
