import { useEffect, useState } from 'react'
import axios from 'axios'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import MainLayout from './MainLayout'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  const getActivites = async () => {
    const res = await axios.get<Activity[]>('http://localhost:5000/api/activities')
    setActivities(res.data)
  }

  useEffect(() => {
    getActivites()
  }, [])

  return (
    <>
      <NavBar />
      <MainLayout>
        <ActivityDashboard activities={activities} />
      </MainLayout>
    </>
  )
}

export default App
