import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions';

export default function decks(state = {}, action) {
  const { title, card } = action;
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        [title]: {
          title,
          questions: [],
        },
      };
    case ADD_CARD:
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions].concat(card),
        },
      };
    default:
      return state;
  }
}
