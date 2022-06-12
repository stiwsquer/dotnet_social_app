import { Activity } from '../../../app/models/activity'
import ActivityItem from './ActivityItem'

type Props = {
  activities: Activity[]
}

function ActivityList({ activities }: Props) {
  if (!activities.length) return <div>Fetching activities...</div>

  return (
    <ul className='flex flex-col flex-auto'>
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </ul>
  )
}

export default ActivityList
