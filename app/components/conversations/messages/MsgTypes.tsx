import { Message_options } from '@/app/data'
import { Divider, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material'
import { DotsThreeVertical, DownloadSimple,Image } from 'phosphor-react'
import React from 'react'

const Timeline = ({el}:any) => {
  return (
    <div className='flex flex-row justify-between items-center w-full p-1'>
      <Divider className='w-5/12' />
      <Typography variant='caption'>{el.text}</Typography>
      <Divider className='w-5/12'/>

    </div>
  )
}
const TextMessage = ({el,menu}:any)=>{

  return (
    <div className={`flex flex-row p-2 ${el.incoming ? 'justify-start ' : 'justify-end' } `} >
      <div className={`p-2 w-fit  rounded-lg ${el.incoming ? 'bg-slate-50' : 'bg-violet-300'}`}>
      <Typography variant='body2'>{el.message}</Typography>

      </div>
      {!menu && 
      <MessageOptions/>}
      </div>
)}

const MediaMessage = ({el,menu}:any)=>{

  return (
      <div className={`flex flex-row p-2 ${el.incoming? 'justify-start': 'justify-end' } `} >
        <div className={`p-2 w-fit  rounded-lg ${el.incoming? 'bg-slate-50' : 'bg-violet-300'}`}>
          <div className='flex flex-col gap-1'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={el.img} alt={el.message} className="border-slate-100 max-h-[200px]"/>
        <Typography variant='body2'>{el.message}</Typography>
        </div>
        </div>
        {!menu &&
      <MessageOptions/>}

        </div>
        )
}
const ReplyMessage = ({el,menu}:any)=>{

  return (
    <div className={`flex flex-row p-2 ${el.incoming ? 'justify-start ' : 'justify-end' } `} >
      <div className={`p-2 w-fit  rounded-lg ${el.incoming ? 'bg-slate-50' : 'bg-violet-300'}`}>
        <div className='flex flex-col '>

          <div className='flex flex-col items-center bg-slate-50 rounded-xl p-2'>

          <Typography variant='body2'>{el.message}</Typography>

          </div>
          <Typography variant='body2'>{el.reply}</Typography>

        </div>

      </div>
      {!menu && 
      <MessageOptions/>}

      </div>
)}

const LinkMessage = ({el,menu}:any)=>{

  return(
    <div className={`flex flex-row p-2 ${el.incoming? 'justify-start': 'justify-end' } `} >
      <div className={`p-2 w-fit  rounded-lg ${el.incoming? 'bg-slate-50' : 'bg-violet-300'}`}>
        <div className='flex flex-col gap-1'>
         <div className='flex flex-col  items-start cursor-pointer font-light'> 
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={el.preview} alt={el.message} className="border-slate-100 max-h-[200px]"/>
        <Typography variant='subtitle1'>Creating chat app</Typography>
        <Typography variant='body2' component={Link} >www.youtube.com</Typography>

        </div>
        <Typography variant='body2'>{el.message}</Typography>

        </div>
        </div>
        {!menu && 
      <MessageOptions/>
        }
        </div>
      
  )
}

const DocumentMessage = ({el,menu}:any)=>{

  return(
    <div className={`flex flex-row p-2 ${el.incoming? 'justify-start': 'justify-end' } `} >
      <div className={`p-2 w-fit  rounded-lg ${el.incoming? 'bg-slate-50' : 'bg-violet-300'}`}>
        <div className='flex flex-col gap-1'>
    
<div className="flex flex-row gap-2 justify-center items-center">
   {/* eslint-disable-next-line jsx-a11y/alt-text */}
  <Image size={48}/>
  <Typography variant='caption'>www.test.png</Typography>
  <IconButton>
  <DownloadSimple  />
  </IconButton>
</div>
<Typography variant='body2'>{el.message}</Typography>

        </div>
        </div>
        {!menu && 
      <MessageOptions/>}

        </div>
      
  )
}

const MessageOptions = () =>{
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
<>
<DotsThreeVertical size={20}
 id="demo-positioned-button"
 aria-controls={open ? 'demo-positioned-menu' : undefined}
 aria-haspopup="true"
 aria-expanded={open ? 'true' : undefined}
 onClick={(e:any)=>handleClick(e)}
 className='cursor-pointer'/>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {Message_options.map((msg,i) => (
        <MenuItem onClick={()=>{}} key={i}>{msg.title}</MenuItem>

        ))}
       
      </Menu>
</>
  )
}
export {Timeline,TextMessage,MediaMessage,ReplyMessage,LinkMessage,DocumentMessage}
