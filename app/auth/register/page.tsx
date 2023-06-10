'use client'
import AuthSocial from '@/app/auth/login/AuthSocial';
import RegisterForm from '@/app/auth/register/RegisterForm';
import Input from '@/app/components/inputs/Input';

import { Typography,Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';


const Page = () => {
    const router = useRouter()
 
  return (
    <div className='flex flex-col bg-violet-50 w-[100%] h-[100vh] gap-1 justify-center items-center flex-grow p-3'>
               
      <img src='/chatLogo.png' width={160} height={160} alt="Ace Chat"/>
      <Typography variant="h5"  >Get started with Ace Chat</Typography>
<div className='flex flex-row gap-2'>
<Typography variant="body2"> Already have an account? </Typography>

<Link  variant="subtitle2" onClick={()=>router.push('/auth/login')} className='cursor-pointer' >
  Sign in
</Link></div>
        {/*RegisterForm  */}
        <RegisterForm/>
        <Typography
        component="div"
        sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
      >
        {'By signing up, I agree to '}
        <Link underline="always" color="text.primary" className='cursor-pointer'>
          Terms of Service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary" className='cursor-pointer'>
          Privacy Policy
        </Link>
        .
      </Typography>
        <AuthSocial/>
    
    </div>
  )
}

export default Page
