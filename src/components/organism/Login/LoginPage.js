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
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        width: '450px',
        height:"450px",
        borderRadius: "10px",
        padding: "10px 10px",
    },
    form: {
        width: "100%", 
        marginTop:"30px",
        marginBottom:"30px"
      },
      red: {
        color: "rgb(255,0,0,.7)",
        paddingLeft: "10px",
        cursor:"pointer"
      },
      popup: {
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        paddingTop: "90px",
        border: "none",
        cursor: "pointer",
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
        width: "100%",
      },
      divide:{
        marginTop:"10px"
    },
      icons:{
        padding: "7px",
        color: "rgb(255,0,0,.7)",
      },
      new:{
        marginTop:"10px"
      }
    
  }));

function LoginPage(props) {
    const classes = useStyles();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const _handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const _handleSubmit = (e) => {
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
        <Grid container spacing={5} direction="column" className={classes.root}>
         <Grid item container alignItems="baseline">
            <Grid item sm>
                 <Typography variant="h4">Login</Typography>
             </Grid>
             <Grid item>
                <CloseIcon fontSize="default" onClick={() => props.setDisplay(false)} />
             </Grid>
       
            <form className={classes.form}>

                <TextField id="outlined-basic" 
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  placeholder={"Email"} required
                    onKeyUp={_handleEmailChange}
                    data-testid="email"/>
                <br/><br/>
                <TextField id="outlined-basic" 
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    placeholder={"Password"} 
                    type="password" required
                    onKeyUp={_handlePasswordChange}
                    data-testid="password"/>

                <Button
                 type="submit"
                 fullWidth
                 color="secondary"
                 className={classes.button}
                 variant="contained" 
                 onClick={_handleSubmit}
                 data-testid="button"
                > Log In
                </Button>

                <Divider variant="middle" className={classes.divide}/>

                <Button variant="outlined" className={classes.button}  
                    onClick={_handleLoginWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} className={classes.icons}  />
                    Continue with Google
                </Button>

                <Divider variant="middle" className={classes.divide}/>

            </form>

              <Grid item className={classes.new}>
                <Typography variant="subtitle1">
                    New to zomato ? 
                </Typography>
              </Grid>
              
              <Grid item>
              <Typography>
                    <span className={classes.red}> Sign Up</span>
                  </Typography>
              </Grid>
       
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
