'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import AuthResetPasswordForm from '@/app/components/auth/AuthResetPasswordForm';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()

  return (
    <>
    <div className='flex flex-col bg-violet-50 w-[100%] h-[100vh] gap-2 justify-center items-center flex-grow p-3'>
        <Typography variant="h3" paragraph>
          Forgot your password?
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </Typography>

      {/* Reset Password Form */}
      <AuthResetPasswordForm />

      <Typography variant="body2"  component={Link} onClick={()=> router.push('/auth/login')} className="cursor-pointer">
        <div className='flex flex-row gap-1'>
      <CaretLeft size={24} />
        Return to sign in       </div> </Typography>
        </div>

    </>
  );
}

export default Page
