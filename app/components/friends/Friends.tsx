import React, { useState } from 'react'
import { Dialog, DialogContent, Slide, Stack, Tab, Tabs } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import UsersList from './UsersLists';
import FriendsList from './FriendsList';
import FriendRequests from './FriendRequests';



interface FriendsProps{
  open:boolean,
  handleClose:()=>void,
}  

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props}  />;
  });
const Friends:React.FC<FriendsProps> = ({ open, handleClose }) => {


  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:number) => {
    setValue(newValue);
  };

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

         <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered  textColor="secondary"
  indicatorColor="secondary">
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>   
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {(() => {
              switch (value) {
                case 0: // display all users in this list
                  return <UsersList />;

                case 1: // display friends in this list
                  return <FriendsList />;

                case 2: // display request in this list
                  return <FriendRequests />;

                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default Friends
