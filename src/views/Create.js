import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Divider, Paper } from 'material-ui/';
import PageBase from '../components/PageBase';
import themeDefault from '../theme-default';

const Create = () => {

  return (
    <PageBase title="Create new Post"
      breadcrumb="Readable / Create Page">
      <Paper style={themeDefault.paper}>
        <form>
          <TextField
            label="Name"
            defaultValue="Name"
            helperText="Some important text"
          />
          <Divider />
          <div>
            <Link to="/dashboard" >
              <Button color="primary">
                Cancel
              </Button>
            </Link>

            <Button raised color="accent" type="submit" style={themeDefault.raisedButton}>
              <i className="material-icons" >playlist_add</i> Send
            </Button>
          </div>
        </form>
      </Paper>

    </PageBase>
  );
};

export default Create;
