'use client'
import NewPasswordForm from '@/app/auth/newpassword/NewPasswordForm'
import { Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { Link, CaretLeft } from 'phosphor-react'
import React from 'react'

const Page = () => {
  const router = useRouter()

  return (
    <>
    <div className='flex flex-col bg-violet-50 w-[100%] h-[100vh] gap-2 justify-center items-center flex-grow p-3'>
      <Typography variant="h3" paragraph>
        Reset Password
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Please set your new password.
      </Typography>

    {/* NewPasswordForm */}

    <NewPasswordForm />

    <Typography variant="body2"  component={Link} onClick={()=> router.push('/auth/login')} className="cursor-pointer">
        <div className='flex flex-row gap-1'>
      <CaretLeft size={24} />
        Return to sign in       </div>
         </Typography>
    </div>

  </>
  )
}

export default Page
