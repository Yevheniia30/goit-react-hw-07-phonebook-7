// селекторы всегда получают весь state

export const getLoading = state => state.phoneBook.loading;

export const getError = state => state.phoneBook.error;

export const getAllContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;

export const getFilteredContacts = state => {
  const allContacts = getAllContacts(state);
  const filtered = getFilter(state);
  const normalizedFilter = filtered.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
