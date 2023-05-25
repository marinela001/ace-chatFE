'use client'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import Button from '../Button';

const AuthResetPasswordForm = () => {
    
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
    
       
      
      <Button label='Send' onClick={handleSubmit(onSubmit)}/> 
    </div>
  )
}

export default AuthResetPasswordForm
