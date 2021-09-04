import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { validateInputService } from '../../services/validate-input.service';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: '0.5rem'
    },
    input: {
        width: '100%'
    }
}));

const Input = props => {
    let item = props.item  
               ? 
               props.item
               :  null;
    
    const [value, setValue] = useState(item.value);
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setError(null);
        const val = event.target.value;
        setValue(val);
        props.onChange(item.id, val);
    }
    
    const onBlur = (item, value) =>  {
        console.log('-on blur');
        console.log(value);
        if(value){
            const check = validateInputService(item.type, value);
            if(!check) {
                setError(`${item.id} is "${item.type}" type`);
            }   
        }else {
            if(item.required){
                setError(`${item.id} is required`);
            }
        }
    }

    const classes = useStyles();
    return (
       <>
           {
                item
                ? 
                <div className={classes.container}>
                    <TextField id={item.id} 
                               variant={item.variant}
                               label={item.label}
                               type={item.type}
                               value={value}
                               required={item.required}
                               disabled={item.disabled}
                               className={classes.input}
                               onChange={handleChange}
                               onBlur={ (event) => onBlur(item, event.target.value)}
                            //    {
                            //        ...item.multiline && 
                            //        'multiline' 
                            //    } 
                            //    maxRows={item.multiline && 4}
                            //    InputLabelProps={{
                            //     shrink: true,
                            //   }}
                            //    maxRows={4}
                               error={error? true: false} 
                               helperText={error ? error : null} />
                </div> 
                : 
                null
           }
       </>
    );
}

export default Input;