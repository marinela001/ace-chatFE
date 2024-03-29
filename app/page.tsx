'use client'
import { Inter } from 'next/font/google'
import Box from '@mui/material/Box';
import Chats from './components/chat/Chats';
import Conversations from './components/conversations/Conversations';
import Contact from './components/tabs/Contact';
import SharedMessages from './components/tabs/SharedMessages';
import StarredMessages from './components/tabs/StarredMessages';
import { RootState, dispatch, useSelector } from './redux/store'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { socket, connectSocket } from "./socket";
import { toast } from "react-hot-toast";
import NoChatSelected from './components/NoChatSelected';
import conversations, { AddDirectConversation, AddDirectMessage, UpdateDirectConversation } from './redux/slices/conversations';
import { SelectConversation } from './redux/slices/app';


const inter = Inter({ subsets: ['latin'] })
let window:Window;

export default function Home() {

  const {sideBar} = useSelector((store:any)=>store.app)
  const {isLoggedIn} = useSelector((state:RootState)=>state.auth)
   const router =useRouter()
   const {user_id} = useSelector((state:RootState) => state.auth);
   const {room_id} = useSelector((state:RootState)=>state.app);
   const {conversations,current_conversation} = useSelector((state:RootState) => state.conversation.direct_chat)
   
   useEffect(() => {
    if (isLoggedIn) {
 
console.log(user_id)
      if (!socket) {
        connectSocket(user_id);
      }

      socket.on("new_friend_request", (data) => {
      toast.success(data.message);
      });

      socket.on("request_accepted", (data) => {
      toast.success(data.message)
      });
      socket.on("new_message", (data) => {
        const message = data.message;
        console.log(current_conversation, data);
        // check if msg we got is from currently selected conversation
        if (current_conversation?.id === data.conversation_id) {
          dispatch(
            AddDirectMessage({
              id: message._id,
              type: "msg",
              subtype: message.type,
              message: message.text,
              incoming: message.to === user_id,
              outgoing: message.from === user_id,
            })
          );
        }
      });

      socket.on("request_sent", (data) => {
        toast.success(data.message);
      });
       socket.on("start_chat", (data) => {
       console.log(data)
       const existing_conversation = conversations.find((el:any)=>el?.id == data._id) 
       console.log('conversations',conversations)
       console.log('existing conversations',existing_conversation)
       if (existing_conversation) {
        console.log('existing')
        // update direct conversation
        dispatch(UpdateDirectConversation({ conversation: data }));
      } else {
        console.log('not existing')

        // add direct conversation
        dispatch(AddDirectConversation({ conversation: data }));
      }

      dispatch(SelectConversation({ room_id: data._id }));
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
