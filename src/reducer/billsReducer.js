const billsInitialState = [];
const billsReducer = (state = billsInitialState, action) => {
  switch (action.type) {
    case "CREATE_BILL": {
      return [...state, { ...action.payload }];
    }

    case "ALL_BILLS": {
      return [...action.payload];
    }

    case "DELETE_BILL": {
      return state.filter((ele) => {
        return ele._id !== action.payload;
      });
    }

    default: {
      return [...state];
    }
  }
};

export default billsReducer;
