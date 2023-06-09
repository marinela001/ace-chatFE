'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideBar from '../app/components/SibeBar'
import Box from '@mui/material/Box';
import Chats from './components/chat/Chats';
import Conversations from './components/conversations/Conversations';
import Contact from './components/tabs/Contact';
import { useSelector } from 'react-redux';
import { store } from "../app/redux/store";
import SharedMessages from './components/tabs/SharedMessages';
import StarredMessages from './components/tabs/StarredMessages';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {sideBar} = useSelector((store:any)=>store.app)
  return (
    
   <Box className='max-h-[100vh] w-screen flex flex-row  overflow-hidden'>
   <Chats/>
   <div className={'w-3/4'}>
   <Conversations/>
   </div>
   {/* Contact */}
   <div className={sideBar.open ? 'inline w-[35%]' : 'hidden' }>
   { (()=>{
    switch(sideBar.type){
      case "CONTACT":
        return <Contact/>;
        case "SHARED":
          return <SharedMessages/>;
          case "STARRED":
            return <StarredMessages/>;
    }
   })()}
   </div>
   </Box>
  )
}
