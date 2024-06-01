const initialState = {
  step: 0,
  pest: null,
  totalSeeds: 0,
  plantDate: null,
  dateRange: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ON_BACK":
      return { ...state, step: state.step - 1 };
    case "ON_NEXT":
      return { ...state, step: state.step + 1 };
    case "SET_REQUIREMENTS_TO_STEP":
      return { ...state, step: action.payload };
    case "SET_TOTALSEEDS":
      return { ...state, totalSeeds: action.payload };
    case "UPDATE_PEST":
      return { ...state, pest: action.payload };
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export { initialState, reducer };
