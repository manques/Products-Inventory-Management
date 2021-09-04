import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const HEADERHEIGHT = '4rem';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  custom: {
    header: {
        height: HEADERHEIGHT
    },
    page: {
        height: `calc( 100vh - ${HEADERHEIGHT})`,
        width: '100%'
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
        form: {
            width: '100%',
            maxWidth: '400px',
            padding: '2rem'
        }
    }
  }
});
 export default theme;