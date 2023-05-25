'use client'
import { Typography ,Link} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import Logo from '@/app/components/Logo'
import { useRouter } from 'next/navigation'
import AuthSocial from '@/app/components/auth/AuthSocial'
import LogInForm from '@/app/components/auth/LogInForm'

const Page = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col bg-violet-50 w-[100%] h-[100vh] gap-2 justify-center items-center flex-grow p-3'>
       
<img src='/chatLogo.png' width={200} height={20} alt="Ace Chat"/>
<Typography variant="h5" >Log In to Ace Chat</Typography>
<div className='flex flex-row gap-2'>
<Typography variant='body2'>New User?</Typography>
<Typography variant="body2"  component={Link} onClick={()=> router.push('/auth/register')} className="cursor-pointer">Create a new account</Typography>

</div>

{/* LoginForm */}
<LogInForm/>
{/* AuthSocial */}
<AuthSocial/>
      
    </div>
  )
}

export default Page
