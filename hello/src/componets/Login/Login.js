import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Monitoring
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="bbroker"
                name="broker"
                variant="outlined"
                required
                fullWidth
                id="broker"
                label="Broker"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="uname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="port"
                label="Port"
                id="port"
                autoComplete="pport"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="topic"
                label="Topic"
                id="topic"
                autoComplete="ttopic"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => this.handleClick(event)}
          >
            Connect
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
}




/* //import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import TextField from 'material-ui/TextField';
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
//import { spacing } from '@material-ui/system';
//import RaisedButton from '@material-ui/core/RaisedButton';
import React from 'react';


class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
      size:'',
      userbroker:'1',
      username:'2',
      userpassword:'3',
      userport:'',
      usertopic:'',
      widthBrowser1:'',
      heightBrowser1:'',
}
}


  


handleClick(event){
    
     console.log(this.state.userbroker);
     console.log(this.state.username);
     console.log(this.state.userpassword);
     console.log(this.state.usertopic);
}


componentDidMount() {
    
    console.log(this.state.userbroker)
    //this.Resize();
}



render() {
    this.size=setInterval(this.FuntionResize(),1);
    return (
      <div>
          <MuiThemeProvider>
                  <div>
                  <Box m={this.heightBrowser1} mx={this.widthBrowser1}  >
                      <AppBar position="static" >
                          <Toolbar>
                              <Typography variant="h6" align="center">
                                  Login
                                  </Typography>
                                  </Toolbar>
                                  </AppBar>
                                  <Grid >
                                      <TextField id="User_broker" label="Broker" 
                                      onChange = {(event,newValue) => this.setState({userbroker:newValue})}/>
                                      </Grid>
                                      <Grid  >
                                      <TextField id="User_Name" label="User" 
                                      onChange = {(event,newValue) => this.setState({usernamer:newValue})}/>
                                      </Grid>
                                      <Grid  >
                                      <TextField id="User_password" label="Password" 
                                      onChange = {(event,newValue) => this.setState({userpassword:newValue})}/>
                                      </Grid>
                                      <Grid  >
                                      <TextField id="User_port" label="Port" 
                                      onChange = {(event,newValue) => this.setState({userport:newValue})}/>
                                      </Grid>
                                      <Grid  >
                                      <TextField id="User_topic" label="Topic" 
                                      onChange = {(event,newValue) => this.setState({usertopic:newValue})}/>
                                      </Grid>
                                      <Grid    alignContent="space-around" alignItems="center" >
                                      <Button  style={style} variant="contained" size="small" color="primary" primary={true}  onClick={(event) => this.handleClick(event)}>
                                          Connect
                                          </Button>
                                          </Grid>
                                          </Box>
                                          </div>
                                          </MuiThemeProvider>
                                          </div>
                                          );
                                        }}
                                        const style = {
                                            margin: 15,
                                        }; */
