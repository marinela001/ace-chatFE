import { FetchFriends, FetchUsers } from "@/app/redux/slices/app";
import {  useSelector,RootState, dispatch } from "@/app/redux/store";
import { useEffect } from "react";
import UserElement from "./UserElement";


const FriendsList = () => {
  
  const { users } = useSelector((state:RootState) => state.app);
  
    useEffect(() => {
      dispatch(FetchUsers());
    }, []);
  
    return (
      <>
        {users?.map((el:any, idx:number) => {
            
          return <UserElement key={idx} {...el} tab_key="FRIENDS" />;
        })}
      </>
    );
  };

export default FriendsList


  