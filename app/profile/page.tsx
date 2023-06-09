
'use client'
import { Box } from '@mui/material'
import React from 'react'
import Profile from './Profile'

const Page = () => {
  return (
    <Box className='max-h-[100vh]  w-screen flex flex-row  overflow-hidden'>
    {/* <SideBar/> */}
    {/* Left Side */}
<Profile/>
    {/* Right Side */}
        </Box>
  )
}

export default Page
