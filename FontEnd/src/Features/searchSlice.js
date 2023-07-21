import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from '../../data/data';


const initialState = {
    show :false,
    productSearch: []
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        searchState:(state)=>{
            return {
                ...state,
                show: !state.show  
            }
        },
        searchedProduct: (state, action)=>{
            const filteredData = []

            for (let i = 0; i < allProducts.length; i++) {
                if (allProducts[i].title.indexOf(action.payload.value) !== -1) {
                    filteredData.push(allProducts[i]);
                }
                }
            return{
                ...state,
                productSearch:filteredData
            }
        },
        getSearchProduct: (state, action)=>{
            console.log(state.productSearch)
            return state.productSearch;
        }
    }
})

export default searchSlice.reducer;
export const {searchState, searchedProduct, getSearchProduct} = searchSlice.actions;
export const selectSearchState = (state)=>state.search.show;
export const selectSearchedProducts = (state)=>state.search.productSearch;


