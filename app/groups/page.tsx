'use client'
import { Box } from '@mui/material'
import SideBar from '../components/SibeBar'
import React from 'react'
import Groups from '../components/groups/Groups'

const  Page = () => {
  return (
    <Box className='max-h-[100vh] max-w-screen flex flex-row  overflow-hidden'>
    <SideBar/>
    {/* Left Side */}
    <Groups/>
    {/* Right Side */}
        </Box>
  )
}

export default Page
