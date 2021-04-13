import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  filterContact,
} from './phoneBook-actions';

// редюсер на тулкит
const contacts = createReducer([], {
  // добавление
  // добавляем только при успешном ввыполнении запроса, т е Success
  [addContactSuccess]: (state, { payload }) =>
    state.find(
      ({ name, number }) => name === payload.name || number === payload.number,
    )
      ? alert('This subscriber is already in contacts')
      : [...state, payload],

  // удаление
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// фильтр
const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

// loading
const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
