import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { Activity } from '../../../app/models/activity'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

type Props = {
  activities: Activity[]
  showCreateActivityForm: boolean
  onCancelCreateActivityClick: () => void
  handleCreateOrEditActivity: (activity: Activity) => void
}

function ActivityDashboard({
  activities,
  showCreateActivityForm,
  onCancelCreateActivityClick,
  handleCreateOrEditActivity
}: Props) {
  return (
    <>
      <ActivityList
        activities={activities}
        handleCreateOrEditActivity={handleCreateOrEditActivity}
      />

      <Modal
        open={showCreateActivityForm}
        onClose={onCancelCreateActivityClick}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-4 rounded-lg'>
          <ActivityForm
            onCancel={onCancelCreateActivityClick}
            title='Create Activity'
            handleCreateOrEditActivity={handleCreateOrEditActivity}
          />
        </div>
      </Modal>
    </>
  )
}

export default ActivityDashboard
