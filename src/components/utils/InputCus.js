import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import {styled} from '@mui/system';
import {green} from "@mui/material/colors";
import {TextField} from "@mui/material";

// const StyledInputElement = styled('input')(
//     ({theme}) => `
//   width: 320px;
//   font-size: 0.875rem;
//   font-family: Kanit;
//   font-weight: 400;
//   line-height: 1.5;
//   background:  ;
//   border: 1px solid #000000 ;
//   border-bottom: 1px solid #000000;
//
//   border-radius: 8px;
//   padding: 12px 12px;
//
//   &:hover {
//     background: white;
//     border-color: ${green[500]} ;
//   }
//
//   &:focus {
//     outline: 1px solid ${green[500]}
//   }
// `,
// );

// export default React.forwardRef(function CustomInput(props, ref) {
//     return (
//         <TextField
//             {...props}
//         />
//     );
// });
export default function Input(props) {

    const {name, label, value, error = null, onChange} = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error: true, helperText: error})}
        />
    )
}


