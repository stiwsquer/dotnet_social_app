import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import agent from '../api/agent'
import { Activity } from '../models/activity'
import MainLayout from './MainLayout'
import NavBar from './NavBar'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [showCreateActivityForm, setShowCreateActivityForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const getActivities = async () => {
    const data = await agent.Activities.list()
    setActivities(data.map((activity) => ({ ...activity, date: activity.date.split('T')[0] })))
  }

  useEffect(() => {
    getActivities()
  }, [])

  const onCreateActivityClick = () => {
    setShowCreateActivityForm(true)
  }

  const onCancelCreateActivityClick = () => {
    setShowCreateActivityForm(false)
  }

  const handleCreateOrEditActivity = async (activity: Activity) => {
    setSubmitting(true)

    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter((act) => act.id !== activity.id), activity])
        setSubmitting(false)
      })
    } else {
      const newActivity = { ...activity, id: uuid() }
      agent.Activities.create(newActivity).then(() => {
        setActivities([...activities, newActivity])
        setSubmitting(false)
      })
    }
    onCancelCreateActivityClick()
  }

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true)
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((x) => x.id !== id)])
      setSubmitting(false)
    })
  }

  return (
    <>
      <NavBar onCreateActivityClick={onCreateActivityClick} />
      <MainLayout>
        <ActivityDashboard
          activities={activities}
          showCreateActivityForm={showCreateActivityForm}
          onCancelCreateActivityClick={onCancelCreateActivityClick}
          handleCreateOrEditActivity={handleCreateOrEditActivity}
          handleDeleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </MainLayout>
    </>
  )
}

export default App
