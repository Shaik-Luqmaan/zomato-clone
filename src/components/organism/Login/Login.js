import React from 'react'
import {Grid} from '@material-ui/core'
import LoginField from '../../atoms/LoginField/LoginField'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "../../atoms/Typography/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {  faGoogle } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        width: '400px',
        borderRadius: "15px",
        padding: "20px 20px",
    },
    form: {
        width: "100%", 
        marginTop:"30px",
      },
      button:{
        margin: "15px 0px 10px 0",
        borderRadius: "5px",
        textTransform: "capitalize",
        padding: "5px",
        fontSize: "18px",
        width: "360px",
      },
      divide:{
          marginTop:"10px"
      },
      icons:{
          padding: "7px",
          color: "rgb(255,0,0,.7)",
      }
  }));

function Login(props) {
    const classes = useStyles();
  return (
 
        <Grid container justify="center" className={classes.root}>
         <Grid item container alignItems="baseline">
            <Grid item sm>
                 <Typography variant="h4">Login</Typography>
             </Grid>
             <Grid item>
                <CloseIcon fontSize="medium" onClick={() => props.setDisplay(false)} />
             </Grid>
       
            <form className={classes.form}>
                <LoginField placeholder={"Phone"}/>

                <Button variant="contained" color="secondary" className={classes.button}>
                    Send One Time Password
                </Button>

                <Divider variant="middle" className={classes.divide}/>

                <Button variant="outlined" className={classes.button}>
                <FontAwesomeIcon icon={faEnvelopeOpen} className={classes.icons} />
                    Continue with Email
                </Button>

                <Button variant="outlined" className={classes.button}>
                <FontAwesomeIcon icon={faGoogle} className={classes.icons}  />
                    Continue with Google
                </Button>

                <Divider variant="middle" className={classes.divide}/>

            </form>

    
              <Grid item className={classes.divide}>
                <Typography variant="subtitle1">
                    New to zomato ? Create Account 
                </Typography>
              </Grid>
          
       
            </Grid>
        </Grid>
      
 
  )
}

export default Login
