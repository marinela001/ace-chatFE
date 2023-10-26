'use client'
import { Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material'
import { Camera, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User,Image,File } from 'phosphor-react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React, { useRef, useState } from 'react'
import { RootState, useSelector } from '@/app/redux/store'
import { socket } from '@/app/socket'

const Footer = () => {
  const { current_conversation } = useSelector(
    (state:RootState) => state.conversation.direct_chat
  );

  const { sideBar, room_id } = useSelector((state:RootState) => state.app);
  const user_id = window.localStorage.getItem("user_id");
  const [value, setValue] = useState("");
  const inputRef:any = useRef(null);
  function linkify(text:string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url:string) => `<a href="${url}" target="_blank">${url}</a>`
    );
  }
  
  function containsUrl(text:string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
  }
  function handleEmojiClick(emoji:any) {
    const input = inputRef.current;

    if (input) {
      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;

      setValue(
       value + emoji );
     
      console.log(value)

      // Move the cursor to the end of the inserted emoji
      input.selectionStart = input.selectionEnd = selectionStart + 1;
    }
  }

  const Actions = [
    {
      color: "violet-200",
      icon: <Image size={24} />,
      y: 102,
      title: "Photo/Video",
    },
    {
      color: "violet-300",
      icon: <Sticker size={24} />,
      y: 172,
      title: "Stickers",
    },
    {
      color: "violet-400",
      icon: <Camera size={24} />,
      y: 242,
      title: "Image",
    },
    {
      color: "violet-300",
      icon: <File size={24} />,
      y: 312,
      title: "Document",
    },
    {
      color: "violet-400",
      icon: <User size={24} />,
      y: 382,
      title: "Contact",
    },
  ];
 
  
  const [isOpen,setIsOpen] = useState(false)
  const [openActions,setOpenActions] = useState(false)
const test ='bg';
  return (
    <div className='flex flex-row gap-2 justify-center px-4 bg-violet-50'>
      <div className={`${isOpen ? 'block' : 'hidden'} z-10 fixed bottom-20 right-20`}>
       <Picker data={data}  onEmojiSelect={(emoji:any) => {
                  handleEmojiClick(emoji.native);
                }}  /></div>
    <TextField fullWidth placeholder='write a message..' variant='filled'  value={value} inputRef={inputRef} onChange={()=>setValue(event.target.value)}  InputProps={{
      disableUnderline:true,
      startAdornment:(
        <Stack sx={{ width: "max-content" }}>
           <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((el,i) => (
                <Tooltip placement="right" title={el.title} key={i}>
                  <Fab
                    onClick={() => {
                      setOpenActions(!openActions);
                    }}
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                    aria-label="add"
                    className={`bg-${el.color}`}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
      <InputAdornment position='start'>
      <IconButton onClick={()=>setOpenActions(!openActions)}>
        <LinkSimple/>
      </IconButton>
      </InputAdornment>
      </Stack>
      ),
      endAdornment:(
      <InputAdornment position='end'>
      <IconButton onClick={()=>setIsOpen(!isOpen)}>
        <Smiley/>
      </IconButton>
      </InputAdornment>)
    }}/>
    <div className='p-2 bg-violet-400 rounded-lg '>
      <IconButton onClick={() => {
        console.log(value)
                  socket.emit("text_message", {
                    message: linkify(value),
                    conversation_id: room_id,
                    from: user_id,
                    to: current_conversation.user_id,
                    type: containsUrl(value) ? "Link" : "Text",
                  });
                  setValue('')
                }}>
      <PaperPlaneTilt  color='#fff'/>
      </IconButton>
    </div>
    </div>
  )
}

export default Footer