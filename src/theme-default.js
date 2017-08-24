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
  actionsDiv: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: accent[500],
    color: 'white'
  },
  avatarSmall: {
    width: 35,
    height: 35,
    backgroundColor: grey[500],
    color: 'white'
  },
  appBar: {
    height: 57,
    color: primary[600]
  },
  card: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    padding: '5% auto',
  },
  cardNoShadow:{
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    padding: '5% auto',
    boxShadow:'none',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'visible',
    width: '100%'
  },
  chip: {
    position: 'absolute',
    cursor: 'pointer',
    top: '16px',
    right: '16px',
  },
  capitalize:{

  },
  form: {

  },
  input: {
    margin: '3% 3% 3% 0',
    width: '47%'
  },
  inputFull: {
    margin: '3% 0',
    width: '95%'
  },
  drawer: {
    width: 236,
    color: grey[900],
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'space-between',
    display: 'flex'
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
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    width: '90%',
    maxWidth: 1200,
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

  overflow: {
    overflow: 'visible',
  },
  overrides: {
    MuiDivider: {
      root: {
        margin: '2% 0'
      }
    },
    MuiCardActions: {
      root: {
        flexFlow: 'row-reverse'
      }
    },
    MuiGridList: {
      root: {
        width: '100%',
      },
    },
    MuiGridListTile: {
      root: {
        overflow: 'visible',
      },
      tile: {
        overflow: 'visible',
        width: '100%',
        
      }
    }
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

export default themeDefault;