import {configureStore} from "@reduxjs/toolkit";
import commentsSlice from "../Slice/Comments"

const store = configureStore({
    reducer:{
      commentsSlice:commentsSlice,
    },
    devTools: true 
})

export default store;