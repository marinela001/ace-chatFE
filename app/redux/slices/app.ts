import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch, RootState, dispatch } from "../store";
import axios from "@/app/utils/axios";



const initialState = {
    user: {},
    sideBar: {
      open: false,
      type: "CONTACT", // can be CONTACT, STARRED, SHARED
    },
  
    users: [], // all users of app who are not friends and not requested yet
  all_users: [],
  friends: [], // all friends
  friendRequests: [], // all friend requests
  chat_type: '',
  room_id: null,
  }
    

    const slice = createSlice({
        name: "app",
        initialState,
        reducers:{
              // Toggle Sidebar
    toggleSideBar(state) {
        state.sideBar.open = !state.sideBar.open;
      },
      updateSideBarType(state, action) {
        state.sideBar.type = action.payload.type;
      },
      updateUsers(state, action) {
        state.users = action.payload.users;
      },
      updateAllUsers(state, action) {
        state.all_users = action.payload.users;
      },
      updateFriends(state, action) {
        state.friends = action.payload.friends;
      },
      updateFriendRequests(state, action) {
        state.friendRequests = action.payload.requests;
      },
      selectConversation(state, action) {
        state.chat_type = "individual";
        state.room_id = action.payload.room_id;
      }
        }
    })

    export default slice.reducer;
    export function ToggleSidebar() {
        return async () => {
          dispatch(slice.actions.toggleSideBar());
        };
      }
      export function UpdateSidebarType(type:string) {
        return async () => {
          dispatch(slice.actions.updateSideBarType({ type }));
        };
      }

      export function FetchUsers() {
        return async (dispatch:AppDispatch,getState:RootState) => {
          await axios
            .get(
              "/user/get-users",
      
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getState().auth.token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              dispatch(slice.actions.updateUsers({ users: response.data.data }));
            })
            .catch((err) => {
              console.log(err);
            });
        };
      }

      export function FetchAllUsers() {
        return async (dispatch:AppDispatch,getState:RootState) => {
          await axios
            .get(
              "/user/get-all-verified-users",
      
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getState().auth.token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              dispatch(slice.actions.updateAllUsers({ users: response.data.data }));
            })
            .catch((err) => {
              console.log(err);
            });
        };
      }

      export function FetchFriendRequests() {
        return async (dispatch:AppDispatch,getState:RootState) => {
          await axios
            .get(
              "/user/get-requests",
      
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getState().auth.token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              dispatch(
                slice.actions.updateFriendRequests({ requests: response.data.data })
              );
            })
            .catch((err) => {
              console.log(err);
            });
        };
      }
      export function FetchFriends() {
        return async (dispatch:AppDispatch,getState:RootState) => {
          await axios
            .get(
              "/user/get-friends",
      
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getState().auth.token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              dispatch(slice.actions.updateFriends({ friends: response.data.data }));
            })
            .catch((err) => {
              console.log(err);
            });
        };
      }
      export const SelectConversation = ({ room_id }:{room_id:number}) => {
        return async (dispatch:AppDispatch,getState:RootState) => {
          dispatch(slice.actions.selectConversation({ room_id }));
        };
      };
      