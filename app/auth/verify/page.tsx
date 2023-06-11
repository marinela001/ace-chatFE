
'use client'
import React from 'react'
import {  Typography } from '@mui/material';
import VerifyForm from './VerifyForm';

const  Page = () => {
  return (
    <>
    <div className='flex flex-col bg-violet-50 w-[100%] h-[100vh] gap-2 justify-center items-center flex-grow p-3'>
        <Typography variant="h3" paragraph>
            Verify email address
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter the OTP  sended to your email address to verify your account!
        </Typography>

      {/* Enter OTP */}

<VerifyForm/>
        </div>

    </>
  )
}

export default Page
