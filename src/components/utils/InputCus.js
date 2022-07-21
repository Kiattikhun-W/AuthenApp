import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import {styled} from '@mui/system';
import {green} from "@mui/material/colors";
import {TextField, InputBase} from "@mui/material";


export default function Input(props) {

    // const {name, label, value, error = null, onChange} = props;
    return (
        <TextField
            {...props}
            // variant={`${props.variant || 'filled'} `}
            // margin={`${props.margin || 'dense'}`}
            size={`${props.size || 'small'} `}
            // variant="standard"
            // variant={`${props.variant || 'standard'} `}
            // label={label}
            // name={name}
            // value={value}
            // onChange={onChange}

        />
    )
}


