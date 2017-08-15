import { blueGrey, cyan, amber, grey, white } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

const primary = blueGrey;
const secondary = cyan;
const accent = amber;

const themeDefault = createMuiTheme({
  palette: createPalette({
    primary: {
      ...primary,
      contrastDefaultColor: 'dark'
    },
    secondary: {
      ...secondary,
      contrastDefaultColor: 'dark'
    },
    accent: {
      ...accent,
      A200: accent[500],
      A400: accent[400],
      contrastDefaultColor: 'dark'
    },
    white: white,
    grey: grey
    //type:'dark'
  }),
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: accent[500],
    color: 'white'
  },
  appBar: {
    height: 57,
    color: primary[600]
  },
  card: {
    maxWidth: 400,
  },
  form: {

  },

  drawer: {
    width: 236,
    color: grey[900]
  },

  actionsDiv: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
  },
  fabButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: accent[500],
    color: 'white'
  },

  page: {
    width: '90%',
    maxWidth: 900,
    margin: '0 auto',
    minHeight: 'calc( 100vh - 170px)'
  },
  paper: {
    padding: '3% 2vw',
  },
  raisedButton: {
    primaryColor: primary[600],
    color: 'white',
  },
  overrides: {
    /*
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
    */
  },

});
console.log('aqui accent', accent)

export default themeDefault;