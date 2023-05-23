import { Chat_History } from '@/app/data';
import React from 'react';
import {DocumentMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline} from './MsgTypes';

const Messages = ({menu}:any) => {
  return (
    <div className='p-3'>
      <div className='flex flex-col gap-3 '>
        {Chat_History.map((el) => {
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
