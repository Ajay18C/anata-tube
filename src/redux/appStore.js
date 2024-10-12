import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import liveChat from "./liveChatSlice";

const appStore = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: liveChat
    }
});


export default appStore;