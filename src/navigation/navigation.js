import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    BrowserRouter,
    Switch,
    Route 
} from 'react-router-dom';
import { authRoutesData, notAuthRoutesData } from '../constants/routes-data/routes-data';

import Header from '../components/header/header';
import PageNotFound from '../page/page-not-found';
import { useSelector  } from 'react-redux';

const useStyles = makeStyles(theme => ({
    container: {

    },
    headerSpacer: {
        ...theme.custom.header
    }
}));

const Navigation = props => {
    const classes = useStyles();
    const auth = useSelector(state => state.user.auth);
    const  onRenderRoutes = list => {
        console.log(list);
        return list.map(item => (
            <Route path={item.path}
                   exact
                   component={item.component} 
                   key={item.id} />
        ));
    }
    return (
        <BrowserRouter>
            <Header />
            <div className={classes.headerSpacer}></div>
            <Switch>
                {
                    auth ?
                    onRenderRoutes(authRoutesData):
                    onRenderRoutes(notAuthRoutesData)
                }
                <Route path="*" component={PageNotFound} />
                <Route path="/*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigation;