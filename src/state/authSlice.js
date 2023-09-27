import { createSlice} from "@reduxjs/toolkit";



const authSlice = createSlice({
  name: "auth",
  initialState: {isLoggedIn : true},
  reducers:{},
})

export default authSlice.reducer