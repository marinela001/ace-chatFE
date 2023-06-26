import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Input from '../inputs/Input'
import ChatElement from './ChatElement'
import { ChatList } from '@/app/data'
import Friends from '../friends/Friends'
import { RootState, dispatch, useSelector } from '@/app/redux/store';
import { FetchDirectConversations } from '@/app/redux/slices/conversations'
import { socket } from "../../socket";


const Chats = () => {
  const user_id = window.localStorage.getItem("user_id");

  const [openDialog,setOpenDialog]= useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  }
  const {conversations}:any = useSelector((state:RootState) => state.conversation.direct_chat);

  useEffect(() => {
    socket?.emit("get_direct_conversations", { user_id }, (data:any) => {
      console.log(data); // this data is the list of conversations
      // dispatch action

      dispatch(FetchDirectConversations({ conversations: data }));
    });
  }, []);
  return (
    <>
  <div className='md:w-1/4 bg-violet-100 shadow-2xl md:p-4 w-[37%] p-1 relative h-[100%] ' >
            <Stack p={1} spacing={2} sx={{ maxHeight: "100vh" }}>

      <div className='flex flex-row justify-between items-center '>
        <h1 className='text-sm md:text-lg text-violet-950'>Chats</h1>
        <div className='flex flex-row justify-center items-center'>
        <IconButton onClick={()=>setOpenDialog(!openDialog)}>
      <Users size={28} />
      </IconButton>
        <IconButton>
      <CircleDashed size={28} />
      </IconButton>
      </div>
      </div>
      <div className='flex items-center  h-8 w-full  p-1 mt-1 bg-gray-100 rounded-lg'>
      <MagnifyingGlass size={20} className='m-2' />
      <input type='text' placeholder='  search or start a new chat' className='bg-gray-100 w-full outline-none '/>

        </div>
        <div className='flex flex-row items-center gap-2 md:m-2 '>
     <ArchiveBox size={24}/>
     <Button className='hidden md:block'>Archive</Button>
    </div>
    <Divider/>
    <div className='flex-grow -ml-10 h-[100%] overflow-y-auto space-y-3 scrollbar-corner-violet-300 scrollbar-track-slate-50 '
    >
      {/* <Typography variant='subtitle2'>Pinned</Typography>
     {ChatList.filter((chat=>chat.pinned)).map((chatList)=>{
      return <ChatElement key={chatList.id} {...chatList}/>


     })}  */}
        <Typography variant='subtitle2'>All Chats</Typography>
     {conversations.filter(((chat: { pinned: any })=>!chat.pinned)).map((chatList:any)=>{
      return <ChatElement key={chatList.id} {...chatList}/>

     })} 


      </div>
</Stack>
    </div>
    {openDialog && <Friends open={openDialog} handleClose={handleClose}/>}
    </>
  )
}

export default Chats
