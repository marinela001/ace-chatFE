import React from 'react'
import { Avatar, Badge, Button, IconButton, Stack, Typography } from '@mui/material';
import { socket } from '@/app/socket';
import { Chat } from 'phosphor-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { RootState, useSelector } from '@/app/redux/store';
interface UserElementProps{
    img:string,
    firstName:string,
    lastName:string,
    online:boolean,
    _id:string,
    tab_key:string
}
const UserElement:React.FC<UserElementProps> = ({img,firstName,lastName,online,_id,tab_key}) => {
    const name = `${firstName} ${lastName}`;

    const {user_id} = useSelector((state:RootState) => state.auth);
    
  
    return (
    <div className='w-full bg-slate-100 flex flex-row items-center justify-between p-4 rounded-xl'>
      <div className="flex flex-row items-center gap-2">
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
      <Typography variant="subtitle2">{name}</Typography>
        </div>
        <div>
        { (()=>{
    switch(tab_key){
      case "USERS":
        return ( 
              <Button
            onClick={() => {

              socket.emit("friend_request", { to: _id, from: user_id }, () => {
                toast.success("request sent");
              });
            }}
            color="secondary">
            Send Request
          </Button>);
        case "FRIENDS":
          return (
            <IconButton
            onClick={() => {
              // start a new conversation
              socket.emit("start_conversation", { to: _id, from: user_id });
            }}
          >
            <Chat />
          </IconButton>


          );
          case "REQUESTS":
            return (

                <Button
            onClick={() => {
              //  emit "accept_request" event
              socket.emit("accept_request", { request_id: _id });
            }}
            color="secondary" >
            Accept Request
          </Button>
            );
    }
   })()}
        
        </div>
    </div>
  )
}

export default UserElement
