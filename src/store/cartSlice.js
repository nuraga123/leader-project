import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },

  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const founded = state.value.find(el => el.id === product.id);

      if (founded) {
        const newAction = {
          ...action,
          payload: founded
        };

        cartSlice.caseReducers.increaseProduct(state, newAction);
      } else {
        state.value = [
          ...state.value,
          {
            ...product,
            id: product.id,
            count: 1,
          }
        ]
      }
    },

    deleteProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id
      )
    },

    increaseProduct: (state, action) => {
      const product = action.payload;

      const copiedArray = [...state.value];

      const indexProduct = state.value.findIndex(el => el.id === product.id);

      const updatingProduct = copiedArray[indexProduct];

      if (updatingProduct.count >= 10) {
        return;
      }

      updatingProduct.count++;

      state.value = copiedArray;
    },

    decreaseProduct: (state, action) => {
      const product = action.payload;
      const copiedArray = [...state.value];

      const indexProduct = state.value.findIndex(el => el.id === product.id);

      const updatingProduct = copiedArray[indexProduct];

      if (updatingProduct.count <= 0) {
        return;
      }

      updatingProduct.count--

      state.value = copiedArray;
    },
  }
})

export const { addProduct, deleteProduct, increaseProduct, decreaseProduct } = cartSlice.actions;

export default cartSlice.reducer;