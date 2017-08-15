import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from 'material-ui/';
import themeDefault from '../theme-default';
import PageBase from '../components/PageBase';
import Post from '../components/Post';
import Data from '../data';

class CategoriesPage extends Component {

  state = {
    open: false,
    anchorEl: undefined,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {

    const categories = Data.Categories;

    return (

      <PageBase title="Categories Page"
        breadcrumb="Readable / Categories Page">
        <div>
          <div style={themeDefault.actionsDiv}>
            <span></span>
            <IconButton
              color="contrast"
              aria-label="More"
              aria-owns={this.state.open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="accent" 
            >
              <i className="material-icons">filter_list</i>
            </IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
              
            >
            { categories.map( (category, index) =>
                <Link to={`/categories/${category.path}`} key={index}>
                  <MenuItem onClick={this.handleRequestClose}>
                    {category.name}
                  </MenuItem>
                </Link>
              )
            }
              
            </Menu>
          </div>
          <Link to="/post">
            <Post />
          </Link>
        </div>

      </PageBase>
    );
  };
}
export default CategoriesPage;
