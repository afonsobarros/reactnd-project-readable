import React from 'react';

let data = {
  user: {
    userName:"",
    remember:""
  },
  menus: [
    { text: 'DashBoard', description:"View all posts", icon: <i className="material-icons" >view_stream</i>, link: '/dashboard' },
    { text: 'Create Post', description:"View posts", icon: <i className="material-icons" >playlist_add</i>, link: '/create' },
    { text: '404 Page', description:"not found page", icon: <i className="material-icons">location_disabled</i>, link: '/table' },
    { text: 'Logout', description:"reset user data", icon: <i className="material-icons" >exit_to_app</i>, link: '/login' }
  ],
};

export default data;
