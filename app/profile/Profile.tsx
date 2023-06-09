import { IconButton, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import ProfileForm from './ProfileForm'

const Profile = () => {
  return (
    <div className='h-[100vh] w-1/4 bg-violet-100 overflow-y-auto shadow-lg flex flex-col gap-2 p-4 '>
   <div className='flex flex-row gap-2 items-center justify-start'>
        <IconButton >
        <CaretLeft size={20} />


        </IconButton>
<Typography variant="h6">Profile</Typography>
    </div>
    <ProfileForm/>

      
    </div>
  )
}

export default Profile
