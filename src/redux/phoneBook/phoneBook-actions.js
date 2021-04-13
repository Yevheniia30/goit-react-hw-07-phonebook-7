import { createAction } from '@reduxjs/toolkit';

// экшены добавления контакта
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// export const deleteContact = createAction('contacts/delete');
// экшены удаления контакта
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// экшен фильтра
export const filterContact = createAction('contacts/filter');
