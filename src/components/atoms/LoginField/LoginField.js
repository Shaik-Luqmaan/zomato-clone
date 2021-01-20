import React from 'react'
import {TextField} from '@material-ui/core'

function LoginField(props) {
    return (
        <TextField id="outlined-basic" 
            variant="outlined"
            fullWidth
            size="small"
            required
            {...props}
            />
    )
}

export default LoginField
