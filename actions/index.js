import { getDecks, saveDeckTitle, addCardToDeck } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_DECK = 'REMOVE_DECK';

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(title) {
  saveDeckTitle(title);
  return {
    type: ADD_DECK,
    title,
  };
}

export function addCard(title, card) {
  addCardToDeck(title, card);
  return {
    type: ADD_CARD,
    title,
    card,
  };
}

export function deleteDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
}

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}
