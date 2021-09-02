const productInitialState = [];
const productsReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return [...state, { ...action.payload }];
    }

    case "UPDATE_PRODUCT": {
      return state.map((ele) => {
        if (ele._id === action.payload._id) {
          return {
            ...ele,
            name: action.payload.name,
            price: action.payload.price,
          };
        } else {
          return { ...ele };
        }
      });
    }

    case "REMOVE_PRODUCT": {
      return state.filter((ele) => {
        return ele._id !== action.payload._id;
      });
    }

    case "GET_ALL_PRODUCTS": {
      return [...action.payload];
    }

    default: {
      return [...state];
    }
  }
};

export default productsReducer;
