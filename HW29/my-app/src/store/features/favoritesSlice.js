import  {createSlice} from '@reduxjs/toolkit';

const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState={
    items:storedFavorites}


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers:{
    addFavorite:(state,action) =>{
        state.items.push(action.payload)
        localStorage.setItem('favorites',JSON.stringify(state.items))
    },
    removeFavorite:(state,action) =>{

      state.items=  state.items.filter((item)=>item.id!=action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.items));

    },
    clearFavorite:(state)=>{
        state.items=[]
        localStorage.setItem('favorites', JSON.stringify([]));

    }
  },

})

export  const {addFavorite,removeFavorite,clearFavorite} =  favoritesSlice.actions;
export default favoritesSlice.reducer