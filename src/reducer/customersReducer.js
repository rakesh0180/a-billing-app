const customersInitialState = [];
const customersReducer = (state = customersInitialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return [...state, { ...action.payload }];
    }

    case "EDIT_CUSTOMER": {
      return state.filter((customer) => {
        return customer.id !== action.payload;
      });
    }

    case "REMOVE_CUSTOMER": {
      return state.map((customer) => {
        if (customer.id === action.payload) {
          return {
            ...customer,
            name: action.payload,
            mobile: action.payload,
            email: action.payload,
          };
        } else {
          return { ...customer };
        }
      });
    }

    case "READ_CUSTOMER_LIST": {
      return [...action.payload];
    }

    default: {
      return [...state];
    }
  }
};
export default customersReducer;
