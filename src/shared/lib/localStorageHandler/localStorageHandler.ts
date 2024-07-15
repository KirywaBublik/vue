export const setToken = (query: string, token: string) => {
  localStorage.setItem(query, token);
};

export const clearToken = (query: string) => {
  localStorage.removeItem(query);
};

export const getToken = (query: string) => {
  return localStorage.getItem(query);
};
