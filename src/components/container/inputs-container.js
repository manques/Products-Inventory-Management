import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../form/input';

const useStyles = makeStyles(theme => ({
    container: {

    },

}));

const InputsContainer = props => {
    const classes = useStyles();
    let list = props.list  && props.list.length > 0 
               ? 
               props.list
               :  null;

    const onRenderList = (list) => {
        return list.map(item => {
            return (
            <Input item={item} 
                   key={item.id} 
                   onChange={props.onChange} />
            );
        });
    }

    return (
       <>
           {
                list && list.length > 0 
                ? 
                <div className={classes.container}>
                    {onRenderList(list)}
                </div> 
                : 
                null
           }
       </>
    );
}

export default InputsContainer;