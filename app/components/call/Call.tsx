'use client'
import React, { useState } from 'react'
import { IconButton, Typography,Link,Divider } from '@mui/material'
import { MagnifyingGlass,Phone,Plus } from 'phosphor-react'
import { CallLogsData } from '@/app/data'
import StartCall from './StartCall'
import CallLogElement from './CallLogElement'
const Call = () => {
    const [dialogOpen,setDialogOpen]=useState(false);
const handleClose= () => {
  setDialogOpen(false)
}
  return (
      <div className='h-[100vh] w-1/4 bg-violet-100 overflow-y-auto shadow-lg flex flex-col gap-2 p-4 '>
    <Typography variant="h5">Call Logs</Typography>
    <div className='flex items-center  h-8 w-full  p-1 mt-1 bg-gray-100 rounded-lg'>
      <MagnifyingGlass size={20} className='m-2' />
      <input type='text' placeholder='search' className='bg-gray-100 w-full outline-none '/>

        </div>
        <div className='flex flex-row gap-2 justify-between items-center' onClick={()=>{setDialogOpen(true)}}>
            <Typography variant="subtitle2" component={Link} className='cursor-pointer'>Start new conversation</Typography>
        <IconButton>
            <Phone />
        </IconButton>
        </div>
        <Divider/>
        <div className='flex-grow  h-[100%] overflow-y-auto space-y-3 scrollbar-corner-violet-300 scrollbar-track-slate-50'>
      <Typography variant='subtitle2'>Call Logs</Typography>
     {/* Call Logs */}
     {CallLogsData.map((el)=>(

<CallLogElement key={el.id} {...el}/>

     ))}

      </div>
    {dialogOpen && <StartCall open={dialogOpen} handleClose={handleClose}/>}
    </div>
  )
}

export default Call
         