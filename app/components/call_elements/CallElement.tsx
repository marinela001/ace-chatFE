import { Avatar, Badge, IconButton, Typography } from '@mui/material'
import { Phone, VideoCamera } from 'phosphor-react';
import React from 'react'

interface CallLogsProps{
  online:boolean;
  name:string;
  img:string;
}
const CallElement = ({online,name,img}:any) => {
  return (
   
    <div className='bg-slate-100  w-full md:p-4  p-1 cursor-pointer rounded-lg flex flex-row justify-between hover:bg-violet-300'>

    <div className='flex flex-row items-center justify-between gap-2'>
      
        <div className='flex flex-row items-center gap-2'>
    <Badge
            color='primary'
            variant={!online ? 'standard' : 'dot'}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            overlap='circular'
          >
            <Avatar src={img} alt={name} />
          </Badge>
          <div className='flex flex-col gap-1'>
          <Typography  variant='subtitle2'>{name}</Typography>
          </div>
    </div>

    </div>
    <div className="flex flex-row gap-2">
    <IconButton>
<Phone />
</IconButton>
<IconButton>
<VideoCamera  />
</IconButton>
</div>
        </div>
  )
}

export default CallElement
