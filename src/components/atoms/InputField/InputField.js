import React from 'react'
import {TextField} from '@material-ui/core'

function TextFieldComponent(props) {
  return (
    <TextField
      fullWidth
      InputProps={{ disableUnderline: true }}
      {...props}
      variant="standard"
    />
  );
}

export default TextFieldComponent
