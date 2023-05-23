'use client'
import React from 'react'
import SideBar from '../components/SibeBar'
import Box from '@mui/material/Box';
import Settings from '../components/settings/Settings';
const page = () => {
  return (
    <Box className='max-h-[100vh] max-w-screen flex flex-row  overflow-hidden'>
<SideBar/>
<Settings/>
    </Box>
  )
}

export default page
