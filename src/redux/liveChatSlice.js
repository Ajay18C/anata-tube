import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constants";

const liveChatSlice = createSlice({
    name:'liveChat',
    initialState: {
        messages: []
    },
    reducers:{
        addMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.unshift(action.payload);
        }
    }
})


export const { addMessage } = liveChatSlice.actions;

export default liveChatSlice.reducer;