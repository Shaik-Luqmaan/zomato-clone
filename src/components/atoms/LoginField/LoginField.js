import React from 'react'
import {TextField} from '@material-ui/core'

function LoginField(props) {
    return (
        <TextField id="outlined-basic" 
            variant="outlined"
            {...props}
            />
    )
}

export default LoginField
