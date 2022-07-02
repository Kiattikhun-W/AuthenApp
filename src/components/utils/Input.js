import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-family: Kanit;
  font-weight: 400;
  line-height: 1.5;
  background:  ;
  border: 0px ;

  border-bottom: 1px solid #000000;

  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: white;
    border-color: #ff8ca1 ;
  }

  &:focus {
    outline: 2px solid #ff8ca1
  }
`,
);

export default React.forwardRef(function CustomInput(props, ref) {
  console.log(props)
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

// export default function UnstyledInputBasic() {
//     return <CustomInput aria-label="Demo input" placeholder="Type something…" />;
// }