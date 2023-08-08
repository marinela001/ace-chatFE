import { FetchFriends, FetchUsers } from "@/app/redux/slices/app";
import {  useSelector,RootState, dispatch } from "@/app/redux/store";
import { useEffect } from "react";
import UserElement from "./UserElement";


const FriendsList = () => {
  
  const { friends  } = useSelector((state:RootState) => state.app);
  
    useEffect(() => {
      dispatch(FetchFriends());
    }, []);

    if(friends.length == 0){

      return <>No friends found</>;
    }
  
    return (
      <>
        {friends ?.map((el:any, idx:number) => {
            
          return <UserElement key={idx} {...el} tab_key="FRIENDS" />;
        })}
      </>
    );
  };

export default FriendsList


  