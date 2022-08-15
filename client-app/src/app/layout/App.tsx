import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import MainLayout from './MainLayout'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [showCreateActivityForm, setShowCreateActivityForm] = useState(false)

  const getActivites = async () => {
    const res = await axios.get<Activity[]>('http://localhost:5000/api/activities')
    setActivities(res.data)
  }

  useEffect(() => {
    getActivites()
  }, [])

  const onCreateActivityClick = () => {
    setShowCreateActivityForm(true)
  }

  const onCancelCreateActivityClick = () => {
    setShowCreateActivityForm(false)
  }

  const handleCreateOrEditActivity = (activity: Activity) => {
    if (activity.id)
      setActivities([...activities.filter((act) => act.id !== activity.id), activity])
    else setActivities([...activities, { ...activity, id: uuid() }])

    onCancelCreateActivityClick()
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter((x) => x.id !== id)])
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
        />
      </MainLayout>
    </>
  )
}

export default App
