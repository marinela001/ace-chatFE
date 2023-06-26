import { FetchUsers } from "@/app/redux/slices/app";
import {  useSelector,RootState, dispatch } from "@/app/redux/store";
import { useEffect } from "react";
import UserElement from "./UserElement";


const UsersList = () => {
  
    const { users } = useSelector((state:RootState) => state.app);
  
    useEffect(() => {
      dispatch(FetchUsers());
    }, []);
  
    return (
      <>
        {users?.map((el:any, idx:number) => {
            
          return <UserElement key={idx} {...el} tab_key="USERS" />;
        })}
      </>
    );
  };

export default UsersList
