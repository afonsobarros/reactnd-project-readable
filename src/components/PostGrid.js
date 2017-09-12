import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { Button, IconButton, Menu, MenuItem } from 'material-ui/';
import { GridList, GridListTile } from 'material-ui/GridList';
import themeDefault from '../theme-default';
import Post from '../components/Post';

import {
  setOrderFilter, openOrderFilter, closeOrderFilter,
  closeFilter, openFilter,
  showPostDetailDialogue
} from '../actions/appState'

class PostGrid extends Component {

  openFilter = event => {
    this.handleRequestClose()
    this.props.openFilter({ target: event.currentTarget });
  };

  openOrder = event => {
    this.handleRequestClose()
    this.props.openOrderFilter({ target: event.currentTarget });
  };

  setOrderFilter = (filter) => {
    this.handleRequestClose()
    this.props.setOrderFilter(filter)
  }

  handleRequestClose = () => {
    this.props.closeFilter();
    this.props.closeOrderFilter();
  }

  render() {
    const { categories, currentCat, posts, isMobile,
      orderBy, anchorEl,
      orderOpen, filterOpen,
      showPostDetailDialogue } = this.props;

    let filteredPosts = posts.length === 0 ? []
      : posts.filter(post => post.category === currentCat || currentCat === 'all').sort((a, b) => 
        orderBy === 'timestamp' ? b[orderBy] - a[orderBy] : b[orderBy] - a[orderBy]
      );

    return (
      <div>
        <div style={themeDefault.actionsDiv}>
          <span></span>
          <div>
            <IconButton
              aria-label="More"
              aria-owns={orderOpen ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.openOrder}
              color="accent"
            >
              <i className="material-icons">swap_vert</i>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={orderOpen}
              onRequestClose={this.handleRequestClose}
            >
              <MenuItem selected={orderBy === 'timestamp'} onClick={ () => this.setOrderFilter('timestamp')}>
                date
              </MenuItem>
              <MenuItem selected={orderBy === 'voteScore'} onClick={() => this.setOrderFilter('voteScore')}>
                votes
              </MenuItem>
              <MenuItem selected={orderBy === 'id'} onClick={() => this.setOrderFilter('id')}>
                id
              </MenuItem>
            </Menu>

            <IconButton
              aria-label="More"
              aria-owns={filterOpen ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.openFilter}
              color="accent"
            >
              <i className="material-icons">filter_list</i>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={filterOpen}
              onRequestClose={this.handleRequestClose}

            >
              <Link to="/all">
                <MenuItem selected={currentCat === 'all'} onClick={this.handleRequestClose}>
                  all
              </MenuItem>
              </Link>
              {categories.map((category, index) =>
                <Link to={`/${category.path}`} key={index}>
                  <MenuItem selected={category.name === currentCat} onClick={this.handleRequestClose}>
                    {category.name}
                  </MenuItem>
                </Link>
              )
              }

            </Menu>
          </div>
        </div>
        <div style={themeDefault.cardList}>
          <GridList cellHeight={'auto'} spacing={50} cols={isMobile && window.innerWidth < 900 ? 1 : 2}>
            {
              filteredPosts.map((post, index) =>
                <GridListTile key={index} cols={1} >
                  <Link key={index}
                    to={`/${currentCat}/${post.id}`} onClick={showPostDetailDialogue}>
                    <Post post={post} />
                  </Link>
                </GridListTile>,
              )}

          </GridList>
          {
            filteredPosts.length < 1
              ? <p style={themeDefault.noResult}> no posts found for <b>"{currentCat}"</b>.<br /><br />Try another category, or <Link to="/all"><Button >view all</Button></Link></p>
              : null
          }
        </div>
      </div>

    );
  };
}


function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    dialoguePostDetailOpen: state.appState.dialoguePostDetailOpen,
    orderBy: state.appState.orderBy,
    anchorEl: state.appState.anchorEl,
    filterOpen: state.appState.filterOpen,
    orderOpen: state.appState.orderByOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openOrderFilter: (target) => dispatch(openOrderFilter(target)),
    closeOrderFilter: () => dispatch(closeOrderFilter()),
    setOrderFilter: (orderBy) => dispatch(setOrderFilter(orderBy)),
    openFilter: (target) => dispatch(openFilter(target)),
    closeFilter: () => dispatch(closeFilter()),
    showPostDetailDialogue: () => dispatch(showPostDetailDialogue()),    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostGrid);