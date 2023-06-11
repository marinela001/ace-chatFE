'use client'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../components/inputs/Input';
import Button from '../../components/Button';
import { RootState, dispatch, useSelector } from '@/app/redux/store';
import { VerifyEmail } from '@/app/redux/slices/auth';
const VerifyForm = () => {

  const {email} = useSelector((state:RootState)=>state.auth)
    const [isLoading, setIsLoading] = useState(false);
    const { 
      register, 
      handleSubmit,
      formState: {
        errors,
      },
    } = useForm<FieldValues>({
      defaultValues: {
        otp: '',
        
      },
    });
  
  
    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {
 dispatch(VerifyEmail({...data,email}))  

    }



  return (
    <div className='flex flex-col w-1/3 gap-4 '>
    <Input
       id="otp"
       label="OTP"
       disabled={isLoading}
       register={register}  
       errors={errors}
       required
       maxLength={6}
       centerText
     />
   
      
     
     <Button label='Verify' onClick={handleSubmit(onSubmit)}/> 
   </div>
  )
}

export default VerifyForm
