'use client'
import { ToggleSidebar } from '@/app/redux/slices/app'
import { RootState, dispatch, useSelector } from '@/app/redux/store'
import { faker } from '@faker-js/faker'
import { Avatar, Badge, Divider, IconButton } from '@mui/material'
import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const { current_conversation } = useSelector(
    (state:RootState) => state.conversation.direct_chat
  );
  return (
    <div className='flex justify-between items-center  p-2'>
      <div className='flex flex-row p-2'>
      <Badge color="primary" variant='dot' anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }} 
  overlap="circular"
  >
<Avatar src={current_conversation.img} onClick={()=>dispatch(ToggleSidebar())}/>
    
</Badge>
<div className='flex flex-col ml-2'>
  <h5 className='font-semibold'>{current_conversation.name}</h5>
  {current_conversation.online && <p className='font-light'>online</p>}
  
</div>
      </div>
      <div className="flex flex-row gap-1 justify-center items-center">
        <IconButton>
        <VideoCamera size={25} />
        </IconButton>
        <IconButton>
        <Phone size={25} />
        </IconButton>
        <IconButton>
        <MagnifyingGlass size={25} />
        </IconButton>
        <Divider orientation='vertical' flexItem className='py-4'/>
         <IconButton>
        <CaretDown size={25} />
        </IconButton>

      </div>
    </div>
  )
}

export default Header
