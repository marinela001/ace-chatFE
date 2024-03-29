'use client'
import React, { useEffect, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import Button from '../../components/Button';
import { Eye, EyeSlash } from 'phosphor-react';
import { useSearchParams } from 'react-router-dom';
import { dispatch } from '@/app/redux/store';
import { NewPassword } from '@/app/redux/slices/auth';

const NewPasswordForm = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
 const [queryParams] =useSearchParams()
    const { 
        register, 
        handleSubmit,
         watch,

        formState: {
          errors,
        },
      } = useForm<FieldValues>({
        defaultValues: {
          password: '',
        },
      });
     
     
    
      const onSubmit: SubmitHandler<FieldValues> = 
      (data) => {
     const token = queryParams.get('token')
       dispatch(NewPassword({...data,token}));
        }
  return (
    <div className='flex flex-col w-1/3 gap-2 '>
     <TextField
        id={'password'}
        disabled={isLoading}
        {...register('password', { required:true,minLength:6 })}
        placeholder=" "
        type={showPassword ? 'text' : 'password'}
      error={errors.password ? true :false }

        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
          }}
      />
        {/* use role="alert" to announce the error message */}
        {errors.password && errors.password.type === "required" && (
        <p role="alert" className='text-red-600'>This is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p role="alert" className='text-red-600'>Password must be at least 6 characters</p>
      )}
      
    
       
      <Button label='Change Password' onClick={handleSubmit(onSubmit)}/> 
    </div>
  )
}

export default NewPasswordForm
