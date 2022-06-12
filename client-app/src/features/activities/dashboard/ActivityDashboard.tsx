import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList'

type Props = {
  activities: Activity[]
}

function ActivityDashboard({ activities }: Props) {
  return <ActivityList activities={activities} />
}

export default ActivityDashboard
