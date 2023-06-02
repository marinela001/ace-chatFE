'use client'

import React from 'react'
import { Box } from '@mui/material'
import SideBar from '../components/SibeBar'
import Call from '../components/call/Call'
const Page = () => {
  return (
    <Box className='max-h-[100vh] max-w-screen flex flex-row  overflow-hidden'>
    <SideBar/>
    {/* Left Side */}
    <Call/>
        </Box>
  )
}

export default Page
