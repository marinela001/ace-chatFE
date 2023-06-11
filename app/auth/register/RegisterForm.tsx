'use client'
import Input from '@/app/components/inputs/Input';
import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { FieldValues, useForm,SubmitHandler } from 'react-hook-form';
import Button from '../../components/Button';
import { dispatch } from '@/app/redux/store';
import { RegisterUser } from '@/app/redux/slices/auth';

const RegisterForm = () => {
    const [isLoading,setIsLoading] = useState(false);

    const { register, handleSubmit,formState: { errors } } = useForm<FieldValues>({
        defaultValues:{
         email:'',
         password:'',
        firstName:'',
        lastName:'',
        }
     });
     const onSubmit: SubmitHandler<FieldValues> = 
     (data) => {

      dispatch(RegisterUser(data))
       }
  return (
    <div className='flex flex-col w-1/3 gap-2 '>
        <div className='flex flex-row justify-between items-center gap-2'>
              <Input  id='firstName' label='First Name' register={register} disabled={isLoading} errors={errors} required/>
              <Input  id='lastName' label='Last Name' register={register} disabled={isLoading} errors={errors} required/>

</div>
          <Input  id='email' label='Email' register={register} disabled={isLoading} errors={errors} required/>
              <Input  id='password' type='password' label='Password' register={register} disabled={isLoading} errors={errors} required/>
              <Button label='Register' onClick={handleSubmit(onSubmit)}/> 
    </div>
  )
}

export default RegisterForm
