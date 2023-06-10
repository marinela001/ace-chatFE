'use client'
import { Box, Stack,Menu,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Switch from '@mui/material/Switch';
import { Avatar } from '@mui/material';
import { faker } from "@faker-js/faker";

import {Nav_Buttons, Profile_Menu} from '../data'
import { useRouter } from 'next/navigation';
import { RootState, useSelector } from '../redux/store'

const SibeBar = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selected,setSelected] = useState(0)
  const {isLoggedIn} = useSelector((state:RootState)=>state.auth)
 if(!isLoggedIn){
  return router.push('/auth/login')
  
 }
  

  return ( 
     <Stack className="h-[100vh] md:w-16 w-7 bg-violet-200  shadow-md flex-col justify-between" spacing={2}>
        <div>
<div className="flex flex-col gap-1">
<Logo/>
<div className=" flex flex-col gap-4 justify-center items-center">
    {Nav_Buttons.map((el:any)=>(
        <IconButton key={el.index} className={selected===el.index ? 'bg-violet-300 hover:bg-violet-400 w-4 h-4 md:w-10 md:h-10 ' : ''} onClick={()=>{setSelected(el.index);router.push(el.path)}}>{el.icon}</IconButton>
    ))}
    <Divider className='w-5'/>
    <IconButton  className={selected===3 ? 'bg-violet-300 hover:bg-violet-400' : ''} onClick={()=>{setSelected(3);router.push('/settings') }}>

    <SettingsOutlinedIcon/>

    </IconButton>
</div>
</div>
</div>

<div className='flex flex-col gap-5 justify-center items-center' >
<Switch defaultChecked   />
    <Avatar src={faker.image.avatar()} 
     id="demo-positioned-button"
     aria-controls={open ? 'demo-positioned-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={(e:any)=>handleClick(e)}
    />
    
    <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          {Profile_Menu.map((el,i) => (
            
          <MenuItem onClick={()=>{router.push(el.path)}} key={i}>
            <div className='flex flex-row justify-between items-center gap-2'>
                <span>{el.title}</span>
                {el.icon}

            </div>
          </MenuItem>
  
          ))}
         
        </Menu>
</div>
        
    </Stack>
    
   
  )
}

export default SibeBar
