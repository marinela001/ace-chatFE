import { faker } from '@faker-js/faker'
import { Avatar, Badge, IconButton, Typography } from '@mui/material'
import { ArrowUpRight, ArrowDownLeft, Phone } from 'phosphor-react'
import React from 'react'
interface CallLogElementProps{
    online:boolean,
    incoming:boolean,
    missed:boolean
}
const CallLogElement:React.FC<CallLogElementProps> = ({online,incoming,missed}) => {

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
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          </Badge>
          <div className='flex flex-col gap-1'>
          <Typography  variant='subtitle2'>{faker.name.fullName()}</Typography>
          <div className="flex flex-row items-center ">
          {incoming? <ArrowDownLeft color={missed ? 'red' : 'green'}/> : <ArrowUpRight color={missed ?'red' : 'green'}/>} 
          <Typography variant="caption"> Yesterday 22:02</Typography>
         </div> </div>
    </div>

    </div>
    <IconButton>
<Phone color='green'/></IconButton>
        </div>  )
}

export default CallLogElement
