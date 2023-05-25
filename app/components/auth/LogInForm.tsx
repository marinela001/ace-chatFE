import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import Button from '../Button';
import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useRouter } from 'next/navigation';

const LogInForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    console.log('test')

   console.log(data)
    }
  
  return (
    <div className='flex flex-col w-1/3 gap-2 '>
     <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
       <Stack alignItems="flex-end" sx={{ my: 1 }}>
<Typography variant="body2"  component={Link} onClick={()=> router.push('/auth/forgotpassword')} className="cursor-pointer">Forgot Password?</Typography>
       
      </Stack>
      <Button label='Log In' onClick={handleSubmit(onSubmit)}/> 
    </div>
  )
}

export default LogInForm
