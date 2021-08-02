import allBooks from "../../fakeData/books.json";

const initialState = {
  discoverList: allBooks,
  readingList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const sameBook = state.readingList?.find(
        (book) => book.id === action.payload.id
      );

      if (sameBook) {
        return state;
      } else {
        const newState = {
          ...state,
          readingList: [...state.readingList, action.payload],
        };
        return newState;
      }
    }

    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter((b) => b.id !== action.payload),
      };
      return newState;
    }

    case "ADD_TO_FINISHED_LIST": {
      const sameBook = state.finishedList?.find(
        (book) => book.id === action.payload.id
      );

      if (sameBook) {
        return state;
      } else {
        const newState = {
          ...state,
          finishedList: [...state.finishedList, action.payload],
        };
        return newState;
      }
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
