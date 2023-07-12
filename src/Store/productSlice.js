import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ERROR, IDLE, LOADING } from '../Utils/Status'

const initialState = {
    data: [],
    status : IDLE
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers : {
        /* fetchProducts(state, action) {
            state.data = action.payload
        } */
    },
    extraReducers : (builder) => {
        builder
        .addCase(getProdcutsFromApi.pending, (state, action) => {
            state.status = LOADING
        })
        .addCase(getProdcutsFromApi.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = IDLE
        })
        .addCase(getProdcutsFromApi.rejected, (state, action) => {
            state.status = ERROR
        })
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer

//second method
export const getProdcutsFromApi = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = data.json()
    return result
})

//one method 

/* export function getProdcutsFromApi() {
    return async function getProdcutsThunk(dispatch, getState) {
        await fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((result) => dispatch(fetchProducts(result)));
    }
} */