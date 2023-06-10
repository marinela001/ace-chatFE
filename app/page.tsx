'use client'
import { Inter } from 'next/font/google'
import SideBar from '../app/components/SibeBar'
import Box from '@mui/material/Box';
import Chats from './components/chat/Chats';
import Conversations from './components/conversations/Conversations';
import Contact from './components/tabs/Contact';
import SharedMessages from './components/tabs/SharedMessages';
import StarredMessages from './components/tabs/StarredMessages';
import { RootState, useSelector } from './redux/store'
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {sideBar} = useSelector((store:any)=>store.app)
  const {isLoggedIn} = useSelector((state:RootState)=>state.auth)
   const router =useRouter()
  if(!isLoggedIn){
return router.push('/auth/login')
  }

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
