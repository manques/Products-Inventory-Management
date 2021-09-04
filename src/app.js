import React from 'react';
import Navigation from './navigation/navigation';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

const App = props => {
    return (
        <ThemeProvider theme={theme}>
            <Navigation />
        </ThemeProvider>
    );
}

export default App;