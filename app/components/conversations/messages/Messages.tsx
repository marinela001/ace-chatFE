import { Chat_History } from '@/app/data';
import React, { useEffect } from 'react';
import {DocumentMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline} from './MsgTypes';
import { RootState, dispatch, useDispatch, useSelector } from '@/app/redux/store';
import { FetchCurrentMessages, SetCurrentConversation } from '@/app/redux/slices/conversations';
import { socket } from '@/app/socket';

const Messages = ({menu}:any) => {
  

  const { conversations, current_messages } = useSelector(
    (state:RootState) => state.conversation.direct_chat
  );
  const { room_id } = useSelector((state:RootState) => state.app);

  useEffect(() => {
    const current = conversations.find((el:any) => el?.id === room_id);

    socket?.emit("get_messages", { conversation_id: current?.id }, (data:any) => {
      // data => list of messages
      console.log(data, "List of messages");
      dispatch(FetchCurrentMessages({ messages: data }));
    });

    dispatch(SetCurrentConversation(current));
  }, [socket]);
  return (
    <div className='p-3'>
      <div className='flex flex-col gap-3 '>
        {current_messages.map((el:any) => {
          switch (el.type) {
            case 'divider':
              //timeline

              return <Timeline el={el} />
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  //image
                 return <MediaMessage el={el} menu={menu}/>
                case 'doc':
                  //document
                  return <DocumentMessage el={el} menu={menu}/>
                case 'link':
                  //link
                  return <LinkMessage el={el} menu={menu}/>
                case 'reply':
                  //reply to a message
                 return <ReplyMessage el={el} menu={menu}/>
                default:
                  //text messag  
                 return <TextMessage el={el} menu={menu}/> 
                }
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Messages;
