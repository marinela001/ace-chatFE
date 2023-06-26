import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
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
    },}
})

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const FetchDirectConversations = ({ conversations }:any) => {
    return async (dispatch:AppDispatch, getState:RootState) => {
      dispatch(slice.actions.fetchDirectConversations({ conversations }));
    };
  };