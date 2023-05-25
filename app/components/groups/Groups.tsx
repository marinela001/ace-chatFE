'use client'
import { ChatList } from '@/app/data'
import { IconButton, Typography,Link,Divider } from '@mui/material'
import { MagnifyingGlass,Plus } from 'phosphor-react'
import React from 'react'
import ChatElement from '../chat/ChatElement'
import AddNewGroup from './AddNewGroup'

const Groups = () => {
    const [openAddNew, setOpenAddNew] = React.useState(false);

    const handleClickOpen = () => {
        setOpenAddNew(true);
    };
  
    const handleClose = () => {
        setOpenAddNew(false);
    };
  return (
<div className='h-[100vh] w-1/4 bg-violet-100 overflow-y-auto shadow-lg flex flex-col gap-2 p-4 '>
    <Typography variant="h5">Groups</Typography>
    <div className='flex items-center  h-8 w-full  p-1 mt-1 bg-gray-100 rounded-lg'>
      <MagnifyingGlass size={20} className='m-2' />
      <input type='text' placeholder='search' className='bg-gray-100 w-full outline-none '/>

        </div>
        <div className='flex flex-row gap-2 justify-between items-center' onClick={()=>handleClickOpen()}>
            <Typography variant="subtitle2" component={Link} className='cursor-pointer'>Create new Group</Typography>
        <IconButton>
            <Plus />
        </IconButton>
        </div>
        <Divider/>
        <div className='flex-grow  h-[100%] overflow-y-auto space-y-3 scrollbar-corner-violet-300 scrollbar-track-slate-50 '
    >
      <Typography variant='subtitle2'>Pinned</Typography>
     {ChatList.filter((chat=>chat.pinned)).map((chatList)=>{
      return <ChatElement key={chatList.id} {...chatList}/>


     })} 
        <Typography variant='subtitle2'>All Chats</Typography>
     {ChatList.filter((chat=>!chat.pinned)).map((chatList)=>{
      return <ChatElement key={chatList.id} {...chatList}/>

     })} 


      </div>
      {openAddNew && 
      <AddNewGroup open={openAddNew} handleClose={handleClose}/>
      }
    </div>
  )
}

export default Groups
