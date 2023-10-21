import usersApi from "../apis/usersApi";

const BASE_URL = "";

export const findAll = async () => {
  try {
    return await usersApi.get(BASE_URL);
  } catch (error) {
    throw error.response;
  }
};

export const findAllPagination = async (page = 0) => {
  try {
    return await usersApi.get(`${BASE_URL}/page/${page}`);
  } catch (error) {
    throw error.response;
  }
};

export const save = async ({ username, email, password, admin }) => {
  try {
    return await usersApi.post(BASE_URL, { username, email, password, admin });
  } catch (error) {
    throw error.response;
  }
};

export const update = async ({ id, username, email, admin }) => {
  try {
    return await usersApi.put(`${BASE_URL}/${id}`, {
      username,
      email,
      admin,
    });
  } catch (error) {
    throw error.response;
  }
};

export const remove = async (id) => {
  try {
    await usersApi.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    throw error.response;
  }
};
