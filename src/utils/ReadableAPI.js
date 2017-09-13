const api = 'http://localhost:5001'

let { user, token } = localStorage


if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  'Authorization': token
}

const nullUser = {
  userName: null,
  isHuman: null,
  password: null,
}

if (!user) {
  user = localStorage.user = JSON.stringify(nullUser);
}

// USER
export const getUser = () => new Promise((resolve, reject) => resolve(JSON.parse(user)));

export const deleteUser = () => new Promise((resolve, reject) => {
  localStorage.user = nullUser;
  resolve(nullUser);
});

export const updateUser = (userData) =>
  new Promise((resolve, reject) => {
    user = localStorage.user = JSON.stringify(userData);
    resolve(userData);
  });

//POSTS
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = (post) => {
  var request = new Request(`${api}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
    }),
    headers: headers
  });
  return fetch(request)
    .then(data => data);
}

export const updatePost = (post) => {
  var request = new Request(`${api}/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: headers
  });
  return fetch(request)
    .then(data => data);
}

export const votePost = (post, option) => {
  var request = new Request(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({option})        
  });
  return fetch(request)
    .then(data => data);
}

export const deletePost = (post) => {
  var request = new Request(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers: headers
  });
  return fetch(request)
    .then(data => data);
}

//COMMENTS
export const addComment = (comment) => {
  var request = new Request(`${api}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
    }),
    headers: headers
  });
  return fetch(request)
    .then(data => data);
}

export const voteComment = (comment, option) => {
  var request = new Request(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: headers,
    body:JSON.stringify({option})    
  });
  return fetch(request)
    .then(data => data);
}

export const deleteComment = (comment) => {
  var request = new Request(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: headers,    
  });
  return fetch(request)
    .then(data => data);
}

export const updateComment = (comment) => {
  var request = new Request(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      timestamp: new Date().getTime(),
      body: comment.body,
    }),
    headers: headers
  });
  return fetch(request)
    .then(data => data);
}

//CATEGORIES
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);