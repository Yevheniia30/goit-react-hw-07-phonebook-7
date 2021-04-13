import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phoneBook-actions';

// ОПЕРАЦИЯ ВСЕГДА ИСПОЛЬЗУЕТ ТРИ ЭКШЕНА - REQUEST,SUCCESS,ERROR

axios.defaults.baseURL = 'http://localhost:3000/';

export const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// export default { addContact };
