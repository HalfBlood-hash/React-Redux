
import {configureStore} from "@reduxjs/toolkit";
import gitHubUsersSlice from "../feature/gitHubUsers";
const store=configureStore({
    reducer:{
        gitHubUsers: gitHubUsersSlice
    }
});

export default store;