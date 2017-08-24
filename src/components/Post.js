import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { withStyles, createStyleSheet } from 'material-ui/styles';

import { Avatar, Badge, Chip, Divider, IconButton, Card, CardHeader, CardContent, CardActions, TextField, Typography } from 'material-ui';
import Collapse from 'material-ui/transitions/Collapse';

import themeDefault from '../theme-default';

import UserAvatar from './UserAvatar';
import Data from '../data';


const styleSheet = createStyleSheet(theme => ({

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
}));

class Post extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, post, insidedialogue } = this.props;
    const date = post && post.timestamp ? new Date(post.timestamp).toDateString() : '';
    let comments = [];

    Object.keys(Data.Comments)
      .map((comment, index) => {
        if (Data.Comments[comment].parentId === post.id)
          comments.push(Data.Comments[comment])
        return true
      });

    return (
      <div>
        <Card style={ !insidedialogue ? themeDefault.card : themeDefault.cardNoShadow}>
          <Link to={"/" + post.category}>
            <Chip style={themeDefault.chip}
              avatar={<Avatar>{post.category[0]}</Avatar>}
              label={post.category} />
          </Link>
          <CardHeader
            avatar={
              <UserAvatar username={post.author} />
            }
            title={post.author}
            subheader={date}
          />
          <Divider />

          <CardContent>

            <Typography type="headline" >
              {post.title}
            </Typography>
            <Typography component="p">
              {post.body}
            </Typography>
          </CardContent>
          <div>
            <Divider />

            <CardActions >
              <IconButton aria-label="Rating" color="primary">
                <Badge badgeContent={post.voteScore} color="accent">
                  <i className="material-icons">stars</i>
                </Badge>
              </IconButton>
              <IconButton aria-label="Vote up" >
                <i className="material-icons">thumb_up</i>
              </IconButton>
              <IconButton aria-label="Vote down">
                <i className="material-icons">thumb_down</i>
              </IconButton>

              <div className={classes.flexGrow} />
              <IconButton
                onClick={this.handleExpandClick}
                color="primary"
              >
                <Badge badgeContent={comments.length} color="accent">
                  <i className="material-icons">comment</i>
                </Badge>
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
              <Divider />
              <CardContent>
                {
                  comments.map((comment, index) =>
                    <div key={index}>
                      <CardHeader
                        avatar={
                          <UserAvatar small={true} username={comment.author} />
                        }
                        title={comment.author}
                        subheader={new Date(comment.timestamp).toDateString()}
                      />
                      <CardContent>
                        <Typography type="title" gutterBottom={true}>
                          {comment.body}
                        </Typography>
                        <Divider />
                      </CardContent>
                    </div>

                  )
                }

                <TextField
                  multiline
                  label="Add a comment"
                  helperText="Please don't be a troll..."
                  rowsMax="4"
                  style={themeDefault.inputFull}
                />

              </CardContent>
            </Collapse>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Post);
