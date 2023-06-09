import { faker } from '@faker-js/faker'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Input from '../components/inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
const ProfileForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { 
      register, 
      handleSubmit,
      formState: {
        errors,
      },
    } = useForm<FieldValues>({
      defaultValues: {
        name: '',
        about: ''
      },
    });

    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {
      console.log('test')
  
     console.log(data)
      }
  return (
    <div className='relative mt-3'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <Avatar src={faker.image.avatar()}   sx={{ width: 100, height: 100 }}
/>
<div className=' w-full'>
        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">This name is visible to your contacts</p>
</div>
      <Input
        multiline
        id="about"
        label="About"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
</div>
<div className='absolute right-0	w-1/2 mt-5'>

<Button label="Save" onClick={handleSubmit(onSubmit)} outline small/>

</div>
    </div>
  )
}

export default ProfileForm
