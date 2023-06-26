import { Avatar, Badge, Stack, Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

import React from 'react';
import { RootState, dispatch, useSelector } from '@/app/redux/store';
import { SelectConversation } from '@/app/redux/slices/app';
interface ChatElementProps {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
}
const ChatElement: React.FC<ChatElementProps> = ({
  id,
  img,
  name,
  msg,
  time,
  unread,
  pinned,
  online,
}) => {

  const truncateText = (string:string, n:number) => {
    return string?.length > n ? `${string?.slice(0, n)}...` : string;
  };

  const {room_id} = useSelector((state:RootState)=>state.app)


  return (
    <div className={`  w-full md:p-4  p-1 cursor-pointer rounded-lg flex flex-row justify-between hover:bg-violet-300 ${room_id==id ? 'bg-violet-300':'bg-slate-100' }`}
    onClick={()=> dispatch(SelectConversation({room_id: id}))}
    >
      <Stack direction="row" spacing={2}>
      <Badge
        color='primary'
        variant={!online ? 'standard' : 'dot'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        overlap='circular'
      >
        <Avatar src={img} />
      </Badge>
      <Stack spacing={0.3} >
        <h2 className='font-semibold'>{name}</h2>
        <p className='font-light text-sm'>{truncateText(msg, 20)}</p>
      </Stack>
      </Stack>

      <div className='text-xs text-gray-500 flex flex-col  items-center'>
        <p>{time}</p>
        <div className=''>
          <Badge color='primary' badgeContent={unread}></Badge>
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
