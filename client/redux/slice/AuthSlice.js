import {createSlice} from '@reduxjs/toolkit'
const initialstate ={
    count:0
}
state ={
    count:0
}
const counterslice = createSlice({
    initialState,
    name:'counter',
    reducers:{
        increment:function(state){
            state.count += 1;
        }
    }
})
export default counterslice.reducer;
export default{increment}=counterslice.actions