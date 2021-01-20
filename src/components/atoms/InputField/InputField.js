import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

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
