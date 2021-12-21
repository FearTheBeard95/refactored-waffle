import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions';

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
        ...state,
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
    case REMOVE_DECK:
      const { [action.id]: value, ...remainingDecks } = state;
      return remainingDecks;
    default:
      return state;
  }
}
