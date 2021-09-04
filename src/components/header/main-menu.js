import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { notAuthMenuData, authMenuData } from '../../constants/menus-data/menu.data';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    container: {

    },
    tab: {
        // borderRadius: '5rem',
        // margin: 0,
        // padding: '0.2rem 0.5rem'
    }
}));

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const MainMenu = props => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const auth = useSelector(state => state.user.auth);
    const handleChange = (newValue) => {
        setValue(newValue);
    }
    const onRenderTabs = (list) => {
        return list.map((item, index) => (
            <Tab label={item.title}
                 component={Link}
                 to={item.to} 
                 key={item.id} 
                 onClick={() => handleChange(item.id - 1)}/>
        ));
    }

    return(
      <Tabs value={value}
            >
          {
              auth?
              onRenderTabs(authMenuData):
              onRenderTabs(notAuthMenuData)
          }
      </Tabs>
    );
}

export default MainMenu;
