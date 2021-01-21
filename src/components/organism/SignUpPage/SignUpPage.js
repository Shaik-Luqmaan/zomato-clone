import React , { useState } from 'react'
import {Grid} from '@material-ui/core'
import LoginField from '../../atoms/LoginField/LoginField'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "../../atoms/Typography/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGoogle } from "@fortawesome/free-brands-svg-icons";
import auth from "../../../auth/initAuth";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        width: '400px',
        borderRadius: "10px",
        padding: "20px 20px",
    },
    form: {
        width: "100%", 
        marginTop:"30px",
        marginBottom:"30px"
      },
    popup: {
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        paddingTop: "10vh",
        backgroundColor: "rgb(0,0,0,0.8)",
        width: "1311px",
        height: "669px",
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
      },
    red: {
        color: "rgb(255,0,0,.7)",
        paddingLeft: "10px",
        cursor:"pointer"
      },
  }));

function SignUpPage(props) {
    const classes = useStyles();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const _handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const _handleSubmit = (e, data) => {
        e.preventDefault();
        auth.login(email, password);
    };
    const _handleLoginWithGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    };
    return (
    <div className={classes.popup}>
      <Grid container justify="center">
        <Grid container className={classes.root}>
         <Grid item container alignItems="baseline">
            <Grid item sm>
                 <Typography variant="h4">Signup</Typography>
             </Grid>
             <Grid item>
                <CloseIcon fontSize="medium" style={{curosr:"pointer"}}
                onClick={() => props.setDisplay(false)} />
             </Grid>
       
            <form className={classes.form}>

                <LoginField placeholder={"Email"} required
                    onKeyUp={_handleEmailChange}/>
                <br/><br/>
                <LoginField placeholder={"Password"} 
                    type="password" required
                    onKeyUp={_handlePasswordChange}/>

                <Button
                 type="submit"
                 fullWidth
                 color="secondary"
                 className={classes.button}
                 variant="contained" 
                 onClick={_handleSubmit}
                > Sign In
                </Button>

                <Divider variant="middle" className={classes.divide}/>

                <Button variant="outlined" className={classes.button}  
                    onClick={_handleLoginWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} className={classes.icons}  />
                    Continue with Google
                </Button>

                <Divider variant="middle" className={classes.divide}/>

            </form>

              <Grid item className={classes.divide}>
                <Typography variant="subtitle1">
                    Already have an account? 
                </Typography>
              </Grid>
              
              <Grid item>
              <Typography>
                    <span className={classes.red}>Log In</span>
                  </Typography>
              </Grid>
       
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUpPage
