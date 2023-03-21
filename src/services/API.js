import axios from 'axios';

const jsonplaceholderAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const { data } = await jsonplaceholderAPI.get('posts');
  return data;
};

export const getPostInfo = async id => {
  const { data } = await jsonplaceholderAPI.get(`posts/${id}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await jsonplaceholderAPI.get('users');
  return data;
};

export const getUserInfo = async id => {
  const { data } = await jsonplaceholderAPI.get(`users/${id}`);
  return data;
};
