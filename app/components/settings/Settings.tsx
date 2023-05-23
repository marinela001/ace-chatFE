'use client'
import { faker } from '@faker-js/faker'
import { Avatar, Divider, IconButton, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note } from 'phosphor-react'
import React, { useState } from 'react'
import Shortcuts from './Shortcuts'

const Settings = () => {
    const [openShortcut,setOpenShortcut] = useState(false);
    const settingsList = [
        {
            key:0,
            icon:<Bell size={20}/>,
            title:"Notifications",
            onClick:() =>{},
        },
        {
            key:1,
            icon:<Lock size={20} />,
            title:"Privacy",
            onClick:() =>{},
        },  {
            key:2,
            icon:<Key size={20}/>,
            title:"Security",
            onClick:() =>{},
        },  {
            key:3,
            icon:<Image size={20}/>,
            title:"Chat wallpaper",
            onClick:() =>{},
        },  {
            key:4,
            icon:<Note size={20}/>,
            title:"Request account info",
            onClick:() =>{},
        },
        {
            key:5,
            icon:<Keyboard size={20}/>,
            title:"Keyboard shortcuts",
            onClick:() =>{setOpenShortcut(true)},
        }, {
            key:6,
            icon:<Info size={20}/>,
            title:"Help",
            onClick:() =>{},
        },
    ]
    return (
        <>
    <div className='flex flex-row w-full '>
        {/* Left panel */}
<div className='h-[100vh] w-1/4 bg-violet-100 overflow-y-auto shadow-lg flex flex-col gap-2 p-4 '>
    <div className='flex flex-row gap-2 items-center justify-start'>
        <IconButton >
        <CaretLeft size={20} />


        </IconButton>
<Typography variant="h6">Settings</Typography>
    </div>
    {/* Profile */}
    <div className='flex flex-row gap-4 items-center mt-3'>
        <Avatar src={faker.image.avatar()}/>
        <div className="flex flex-col items-center gap-1 justify-center">
            <Typography variant="body2">{faker.name.fullName()}</Typography>
            <Typography variant="body2">{faker.random.word()}</Typography>

        </div>
    </div>

    {/* Settings */}
    <div className='mt-3 '>
{settingsList.map((el)=>(
    <div key={el.key} className='flex flex-col gap-3 p-2'>
    <div className='flex flex-row items-center justify-start cursor-pointer ' onClick={el.onClick}>
<IconButton onClick={el.onClick}>
    {el.icon}
</IconButton>
<Typography variant="body2">{el.title}</Typography>
    </div>
    {el.key !== 6 &&
    <Divider/>}
    </div>
))}
</div>
</div>

      Settings

      {/* Right panel */}
    </div>
    {openShortcut && 
    <Shortcuts open={openShortcut} handleClose={()=>{setOpenShortcut(false)}}/>}
    </>
  )
}

export default Settings
