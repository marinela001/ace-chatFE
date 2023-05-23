import { UpdateSidebarType } from '@/app/redux/slices/app'
import { dispatch } from '@/app/redux/store'
import { IconButton, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import Messages from '../conversations/messages/Messages'

const StarredMessages = () => {
  return (
    <div className=' h-[100%] w-full flex flex-col border-l-2 '>
    {/* Header */}
   <div className='h-16 bg-violet-200 flex flex-row gap-1 items-center p-3 '>
              <IconButton onClick={()=>dispatch(UpdateSidebarType('CONTACT'))}>
                  <CaretLeft size={20} />
              </IconButton>
              <Typography variant='subtitle2'>Starred Messages</Typography>
              
          </div>
          {/* Body */}
 <div className='flex flex-col flex-grow gap-2  bg-slate-100 p-4 overflow-y-scroll scrollbar-thin'>
    <Messages menu/>
</div>
      
    </div>
  )
}

export default StarredMessages
