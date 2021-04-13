import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  filterContact,
} from './phoneBook-actions';
// import { deleteContact } from './phoneBook-operations';

// редюсер на тулкит
const contacts = createReducer([], {
  // получение сохраненных контактов с бекенда
  [getContactSuccess]: (state, { payload }) => payload,
  // добавление
  // добавляем только при успешном ввыполнении запроса, т е Success
  [addContactSuccess]: (state, { payload }) =>
    state.find(
      ({ name, number }) => name === payload.name || number === payload.number,
    )
      ? alert('This subscriber is already in contacts')
      : [...state, payload],

  // удаление
  [deleteContactSuccess]: (state, { payload }) =>
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
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
