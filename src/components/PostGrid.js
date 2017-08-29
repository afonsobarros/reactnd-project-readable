import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, Menu, MenuItem } from 'material-ui/';
import { GridList, GridListTile } from 'material-ui/GridList';
import themeDefault from '../theme-default';
import Post from '../components/Post';

class PostGrid extends Component {

  state = {
    filterOpen: false,
    orderOpen: false,
    anchorEl: undefined,
  };

  openOrder = event => {
    this.setState({ orderOpen: true, anchorEl: event.currentTarget });
  };

  openFilter = event => {
    this.setState({ filterOpen: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ filterOpen: false, orderOpen: false });
  };

  render() {
    const { categories, currentCat, posts, isMobile } = this.props;
    let filteredPosts = [];

    Object.keys(posts)
      .map((post, index) => {
        if (posts[post].category === currentCat || currentCat === 'all')
          filteredPosts.push(posts[post])
        return true
      }
      );

    return (
      <div>
        <div style={themeDefault.actionsDiv}>
          <span></span>
          <div>
            <IconButton
              aria-label="More"
              aria-owns={this.state.orderOpen ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.openOrder}
              color="accent"
            >
              <i className="material-icons">swap_vert</i>
            </IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={this.state.orderOpen}
              onRequestClose={this.handleRequestClose}
            >
              <MenuItem onClick={this.handleRequestClose}>
                date
              </MenuItem>
              <MenuItem onClick={this.handleRequestClose}>
                rating
              </MenuItem>
            </Menu>

            <IconButton
              aria-label="More"
              aria-owns={this.state.filterOpen ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.openFilter}
              color="accent"
            >
              <i className="material-icons">filter_list</i>
            </IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={this.state.filterOpen}
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
                  to={`/${currentCat}/${post.id}`}>
                  <Post post={post} />
                </Link>
              </GridListTile>,
            )}
            
          </GridList>
          {
              filteredPosts.length < 1 
              ? <p style={themeDefault.noResult}> no posts found for <b>"{currentCat}"</b>.<br/><br/>Try another category, or <Link to="/all"><Button >view all</Button></Link></p>
              : null
            }
        </div>
      </div>

    );
  };
}
export default PostGrid;
