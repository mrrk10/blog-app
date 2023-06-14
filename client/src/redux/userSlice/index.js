import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: '',
  fullname:'',
  email:'',
  token:''
}

export const uerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const{_id,fullname,email,token}=action.payload
      state._id = _id,
      state.fullname=fullname,
      state.email=email,
      state.token=token
    },
  },
})

export const { setUserDetails } = uerSlice.actions

export default uerSlice.reducer