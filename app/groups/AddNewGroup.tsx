'use client'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button ,Slide, Autocomplete, TextField} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions'

import React, { useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '../components/inputs/Input';

interface AddNewGroupProps{
    open :boolean;
    handleClose:()=>void;
}
const AddNewGroup:React.FC<AddNewGroupProps> = ({open,handleClose}) => {
const MEMBERS = ['member1','member2','member3']
    const [isLoading, setIsLoading] = useState(false);
    const { 
      register, 
      handleSubmit,
      formState: {
        errors,
        isSubmitting, isValid 
      },
    } = useForm<FieldValues>({
      defaultValues: {
        title: '',
        members: []
      },
    });
    const onSubmit: SubmitHandler<FieldValues> = 
    (data) => {


    }

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
    const TAGS_OPTION = [
        "Toy Story 3",
        "Logan",
        "Full Metal Jacket",
        "Dangal",
        "The Sting",
        "2001: A Space Odyssey",
        "Singin' in the Rain",
        "Toy Story",
        "Bicycle Thieves",
        "The Kid",
        "Inglourious Basterds",
        "Snatch",
        "3 Idiots",
      ];
  return (
    <div>
        <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create new group"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='flex flex-col gap-2'>
          <Input
        id="title"
        label="Group Name"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <Autocomplete
   
  id="members"
  multiple
  color='secondary'
  options={MEMBERS.map((option) =>option)}
  renderInput={(params) => <TextField {...params} label="Members" id="members" />}
/></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}  className='bg-purple-500 hover:bg-purple-700 text-white'>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddNewGroup
