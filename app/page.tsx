'use client'
import { Inter } from 'next/font/google'
import Box from '@mui/material/Box';
import Chats from './components/chat/Chats';
import Conversations from './components/conversations/Conversations';
import Contact from './components/tabs/Contact';
import SharedMessages from './components/tabs/SharedMessages';
import StarredMessages from './components/tabs/StarredMessages';
import { RootState, useSelector } from './redux/store'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { socket, connectSocket } from "./socket";
import { toast } from "react-hot-toast";
import NoChatSelected from './components/NoChatSelected';


const inter = Inter({ subsets: ['latin'] })
let window:Window;

export default function Home() {

  const {sideBar} = useSelector((store:any)=>store.app)
  const {isLoggedIn} = useSelector((state:RootState)=>state.auth)
   const router =useRouter()
   const {user_id} = useSelector((state:RootState) => state.auth);
   const {room_id} = useSelector((state:RootState)=>state.app)
   
   useEffect(() => {
    if (isLoggedIn) {
 

      if (!socket) {
        connectSocket(user_id);
      }

    

   
    

      socket.on("new_friend_request", (data) => {
      toast.success(data.message);
      });

      socket.on("request_accepted", (data) => {
      toast.success(data.message)
      });

      socket.on("request_sent", (data) => {
        toast.success(data.message);
      });
    }

    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
      socket?.off("new_message");
      socket?.off("audio_call_notification");
    };
  }, [isLoggedIn, socket]);
  

  if(!isLoggedIn){
return router.push('/auth/login')
  }

  
  return (
   <Box className='h-[100vh] w-screen flex flex-row  overflow-hidden'>
   <Chats/>
   <div className={'w-3/4'}>
    {room_id !==null ?  <Conversations/> : <NoChatSelected/>
     
  }
   
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
