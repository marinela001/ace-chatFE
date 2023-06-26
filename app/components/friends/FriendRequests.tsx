import { FetchFriendRequests,  } from "@/app/redux/slices/app";
import {  useSelector,RootState, dispatch } from "@/app/redux/store";
import { useEffect } from "react";
import UserElement from "./UserElement";


const FriendRequests = () => {
  
    const { friendRequests } = useSelector((state:RootState) => state.app);
  
    useEffect(() => {
      dispatch(FetchFriendRequests());
    }, []);
  
    return (
      <>
        {friendRequests?.map((el:any, idx:number) => {
            
          return <UserElement key={idx} {...el}  tab_key="REQUESTS"/>;
        })}
      </>
    );
  };

export default FriendRequests
