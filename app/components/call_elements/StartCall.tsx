import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Stack,
  } from "@mui/material";
  import {faker} from "@faker-js/faker"
import { MemberList } from '@/app/data';
import { TransitionProps } from '@mui/material/transitions';
import { MagnifyingGlass } from 'phosphor-react';
import CallElement from './CallElement';
interface StartCallProps{
    open:boolean;
    handleClose:()=>void
}
const StartCall:React.FC<StartCallProps> = ({open,handleClose}) => {

   
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      
  return (
     <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>{"Start New Conversation"}</DialogTitle>
      <div className="flex flex-col gap-2 w-[100%]">
      <div className='flex items-center  h-8 w-full  p-1 mt-1 bg-gray-100 rounded-lg'>
      <MagnifyingGlass size={20} className='m-2' />
      <input type='text' placeholder='search' className='bg-gray-100 w-full outline-none '/>

        </div>
      </div>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {MemberList.map((el, idx) => {
              return <CallElement key={idx} {...el}  />;
            })}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default StartCall
