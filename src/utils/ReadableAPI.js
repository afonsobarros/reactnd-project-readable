const api = 'http://localhost:5001'

let { user, token } = localStorage


if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const nullUser = {
  userName: null,
  isHuman: null,
  password: null,
}

if (!user){
  user = localStorage.user = nullUser
}

export const getUser = () => new Promise((resolve, reject) => resolve(JSON.parse(user)));

export const deleteUser = () => new Promise((resolve, reject) => {
  localStorage.user = nullUser;
  resolve(nullUser);
});

export const updateUser = (userData) =>
  new Promise((resolve, reject) => {
    localStorage.user = JSON.stringify(userData);
    resolve(userData);
  });

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getComments = (postId = "8xf0y6ziyjabvozdd253nd") =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);