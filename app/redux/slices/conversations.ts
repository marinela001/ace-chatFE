import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations:[] as any,
    current_conversation: null,
    current_messages: [] as any,
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      
      const list = action.payload.conversations.map((el:any) => {
        const user = el.participants.find(
          (elm:any) => elm._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: user?._id,
          name: `${user?.firstName} ${user?.lastName}`,
          online: user?.status === "Online",
          img: faker.image.avatar(),
          msg: el.messages.slice(-1)[0].text, 
          time: "9:36",
          unread: 0,
          pinned: false,
          about: user?.about,
        };

        
      });

      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el:any) => {
          if (el?.id !== this_conversation._id) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (elm:any) => elm._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user?._id,
              name: `${user?.firstName} ${user?.lastName}`,
              online: user?.status === "Online",
              img: faker.image.avatar(),
              msg: faker.music.songName(),
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (elm:any) => elm._id.toString() !== user_id
      );
      state.direct_chat.conversations = state.direct_chat.conversations.filter(
        (el:any) => el?.id !== this_conversation._id
      );
      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user?._id,
        name: `${user?.firstName} ${user?.lastName}`,
        online: user?.status === "Online",
        img: faker.image.avatar(),
        msg: faker.music.songName(),
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
    setCurrentConversation(state, action) {
      state.direct_chat.current_conversation = action.payload;
    },
    fetchCurrentMessages(state, action) {
      const messages = action.payload.messages;
      const formatted_messages = messages.map((el:any) => ({
        id: el._id,
        type: "msg",
        subtype: el.type,
        message: el.text,
        incoming: el.to === user_id,
        outgoing: el.from === user_id,
      }));
      state.direct_chat.current_messages = formatted_messages;
    },
    addDirectMessage(state, action) {
      state.direct_chat.current_messages.push(action.payload.message);
    }
    
  },
});
    


// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const FetchDirectConversations = ({ conversations }:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.fetchDirectConversations({ conversations }));
    };
  };
  export const AddDirectConversation = ({ conversation }:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.addDirectConversation({ conversation }));
    };
  };
  export const UpdateDirectConversation = ({ conversation }:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.updateDirectConversation({ conversation }));
    };
  };
  export const AddDirectMessage = (message:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.addDirectMessage({message}));
    }
  }
  export const FetchCurrentMessages = ({messages}:any) => {
    return async(dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.fetchCurrentMessages({messages}));
    }
  }
  export const SetCurrentConversation = (current_conversation:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.setCurrentConversation(current_conversation));
    };
  };
  