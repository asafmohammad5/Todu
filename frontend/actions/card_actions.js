import * as CardUtil from '../util/card_util';

export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';


const receiveAllCards = cards => ({
  type: RECEIVE_ALL_CARDS,
  cards
})

const receiveCard = payload => ({
  type: RECEIVE_CARD,
  payload
})

const removeCard = payload => ({
  type: REMOVE_CARD,
  payload
})


export const fetchCards = (boardId, listId) => dispatch => (
  CardUtil.fetchCards(boardId, listId).then(cards => dispatch(receiveAllCards(cards)))
)

export const fetchCard = (boardId, listId, cardId) => dispatch => (
  CardUtil.fetchCard(boardId, listId, cardId).then(payload => dispatch(receiveCard(payload)))
)

export const createCard = (boardId, listId, card) => dispatch => (
  CardUtil.createCard(boardId, listId, card).then(payload => dispatch(receiveCard(payload)))
)

export const updateCard = (boardId, listId, card) => dispatch => (
  CardUtil.updateCard(boardId, listId, card).then(payload => dispatch(receiveCard(payload)))
)

export const deleteCard = (boardId, listId, cardId) => dispatch => (
  CardUtil.deleteCard(boardId, listId, cardId).then(payload => dispatch(removeCard(payload)))
)