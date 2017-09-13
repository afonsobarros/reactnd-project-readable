import { blueGrey, cyan, amber, grey, white, red, green } from 'material-ui/colors';
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
    grey: grey,
    warn: red
    //type:'dark'
  }),
  actionsDiv: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
  },
  autoWidth:{
    width:'auto'
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
  cardNoShadow: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    padding: '5% auto',
    boxShadow: 'none',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'visible',
    width: '100%'
  },
  center: {
    textAlign: 'center',
    margin: '0 auto'
  },
  chip: {
    cursor: 'pointer',
    top: '16px',
    right: '16px',
    textTransform: 'capitalize'
  },
  loading: {
    margin: '0 auto'
  },
  chipAbsolute: {
    position: 'absolute',
    cursor: 'pointer',
    top: '16px',
    right: '16px',
    textTransform: 'capitalize'
  },
  editAbsolute: {
    //position: 'absolute',
    float:'right',
    cursor: 'pointer',
    top: '0',
    right: '0',
    textTransform: 'capitalize'
  },
  capitalize: {

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
  inputFullActions: {
    margin: '24px 24px 24px 0',
    flex: '1 1 auto',
  },
  fullWidth:{
    maxWidth:'100%',
    padding:'0 24px'
  },
  drawer: {
    width: 236,
    color: grey[900],
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'space-between',
    display: 'flex'
  },
  flexGrow: {
    flex: '1 1 auto',
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
  commentsContainer: {
    marginTop: '24px',
    padding: '0 24px'
  },
  comment: {
    maxWidth: '100%',
    overflow: 'hidden',
    wordWrap: 'break-word'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  noResult: {
    textAlign: 'center'
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
    width: 'auto',
    margin: '16px 0 16px 16px'
  },
  reverse: {
    display: 'flex',
    flexFlow: 'row-reverse'
  },
  reverseAbsolute: {
    display: 'flex',
    flexFlow: 'row-reverse',
    position: 'absolute',
    top: 20,
    right: -20,
  },
  relative: {
    position: 'relative',
  },
  noPadding: {
    padding: 0
  },
  overflow: {
    overflow: 'visible',
  },
  warnColor: {
    color: red[900]
  },
  greenColor: {
    color: green[900]
  },
  toolbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: ' border-box',
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
    MuiCardContent: {
      root: {
        maxHeight: '25vh',
        overflow: 'auto',
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
    },
    MuiFormControl: {
      root:{
        width:'100%'
      }
    },
    MuiDialogActions: {
      root: {
        width:'90%',
        margin: '0 auto',
        padding: '0 24px',
      },
    }
  },
});

export default themeDefault;