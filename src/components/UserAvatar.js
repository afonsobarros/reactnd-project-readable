import React, { Component } from 'react';
import { Avatar } from 'material-ui';
import themeDefault from '../theme-default';

class UserAvatar extends Component {


  render() {
    const { username, small } = this.props;
    let firstLetters = username.substring(0, 1).toUpperCase();
    if (username.split(" ").length > 1)
      firstLetters += username.split(" ")[1].substring(0, 1).toUpperCase();
    return (
      <Avatar style={small
        ? themeDefault.avatarSmall
        : themeDefault.avatar}>
        {firstLetters}
      </Avatar>
    );
  }
}

export default UserAvatar;
