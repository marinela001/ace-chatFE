'use client'
import { ToggleSidebar, UpdateSidebarType } from '@/app/redux/slices/app'
import { dispatch } from '@/app/redux/store'
import { faker } from '@faker-js/faker'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Switch, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X, XCircle } from 'phosphor-react'
import React, { useState } from 'react'

const Contact = () => {
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
    const [openBlock, setOpenBlock] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

  
    const handleCloseBlock = () => {
      setOpenBlock(false);
    };
    const handleCloseDelete = () => {
        setOpenDelete(false);
      };
 const BlockDialog = ({open,handleClose}:any)=>{
      return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to block this contact?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
         If you confirm you will no longer receive any messages from 
          this contact
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>
)
      }

      const DeleteDialog = ({open,handleClose}:any)=>{
        return (
          <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Are you sure you want to delete this chat?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              All your messages will be deleted permantly when you confirm
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Yes,I am sure</Button>
          </DialogActions>
        </Dialog>
  )
        }

  return (
    <div className=' h-[100%] w-full flex flex-col border-l-2 overflow-y-scroll scrollbar-thin'>
        {/* Header */}
        <div className='h-16 bg-violet-100 flex flex-row gap-1 items-center p-3 '>
            <IconButton onClick={()=>dispatch(ToggleSidebar())}>
                <XCircle size={20}/>
            </IconButton>
            <Typography variant='subtitle2'>Contact Info</Typography>
            
        </div>
        
    {/* Body */}
 <div className='flex flex-col flex-grow gap-2  bg-slate-100 p-4 overflow-y-scroll scrollbar-thin'>
    <div className='flex flex-row justify-center items-center gap-4'>
        <Avatar src={faker.image.avatar()} alt=''/>
        <div className='flex flex-col gap-2'>
            <Typography variant='body2' className="font-semibold">{faker.name.fullName()}</Typography>
            <Typography variant='body2'>{'+3409 909 090'}</Typography>

        </div>
    </div>
 <div className='flex flex-row justify-evenly items-center'>
    <div className='flex flex-col justify-center items-center'>
        <IconButton>
    <VideoCamera size={18} /></IconButton>
    <Typography variant='body1'>Audio</Typography>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <IconButton>
    <Phone size={18} /></IconButton>
        <Typography variant='body1'>Call</Typography>
    </div>
 </div>
 <Divider/>
 <div className="flex flex-col gap-2 justify-center items-start">
    <Typography variant='body1'>About</Typography>
    <Typography variant="body2">Imagination is the only limit</Typography>

 </div>
 <Divider/>
 <div className="flex flex-row justify-between items-center">
    <Typography variant='body2' className='font-semibold text-gray-700'> Media, Links and Documents</Typography>
    <Button endIcon={<CaretRight />} onClick={()=>dispatch(UpdateSidebarType("SHARED"))}>
    404
    </Button>
 </div>
 <div className='grid grid-cols-1 md:grid-cols-4  gap-2'>
    {[1,2,3,4].map((el:number)=>(

        <img src={faker.image.food()} alt='' key={el} />
    )
    
    )}
 </div>
 <Divider/>
 <div className='flex flex-row justify-between items-center gap-1'>
    <div className='flex flex-row gap-2'>
        <Star/>
        <Typography variant="subtitle2">Starred Messages</Typography>
    </div>
    <IconButton onClick={()=>dispatch(UpdateSidebarType("STARRED"))}>
        <CaretRight/>
    </IconButton>
 </div>
 <Divider/>
 <div className='flex flex-row justify-between items-center'>
    <div className='flex flex-row gap-2'>
        <Bell/>
        <Typography variant="subtitle2">Mute Notifications</Typography>
    </div>
    <IconButton>
    <Switch  color="secondary" />

    </IconButton>
 </div>
 <Divider/>
 {/*Footer  */}
 <Typography variant="body2">1 group in common</Typography>
 <div className='flex flex-row  items-center gap-2'>
 <Avatar src={faker.image.avatar()} alt=''/>

<div className='flex flex-col justify-center gap-2'>
    <Typography variant='subtitle2' className="text-gray-700 font-semibold">Grupi Neles</Typography>
    <Typography variant="caption">Frog,Toad,You</Typography>

</div>
 </div>
 <div className='flex flex-row items-center justify-evenly gap-2'>
    <Button startIcon={<Prohibit/>} variant='outlined' fullWidth  onClick={()=>setOpenBlock(true)}>
        Block
    </Button>
    <Button startIcon={<Trash/>} variant="outlined" fullWidth onClick={()=>setOpenDelete(true)}>
        Delete
    </Button>
 </div>
 </div>
{openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete}/>
}

{openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}/>
}
    </div>
  )
}

export default Contact
