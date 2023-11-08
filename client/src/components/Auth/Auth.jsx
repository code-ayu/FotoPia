import {Avatar ,  Paper , Grid , Typography , Container, Button} from '@mui/material'
import useStyles from './styles';
import Input from './Input';
import { useNavigate }  from 'react-router-dom';
import { useState } from 'react';
// import {GoogleLogin} from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import {signup , signin} from '../../actions/auth'

// import {jwtDecode}  from 'jwt-decode';

const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: '' };


function Auth() {
  const classes= useStyles();
  const [isSignUp , setIsSignUp] = useState(false);
  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const history = useNavigate()


  const handleShowPassword = () =>{
    setShowPassword((prevShowPassword) => !prevShowPassword )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData , history))
    }
    else{
      dispatch(signin(formData , history))

    }
  }
  const handleChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
  } 

  const switchMode = () => {
    setIsSignUp((isSignUp) => !isSignUp)
    setShowPassword(false)
  }


  // const googleSuccess = async (res) => {
  //   console.log("res = " + res)
  //   const credentialResponse = jwtDecode(res.credential)
  //   console.log(credentialResponse)
  //   const result = credentialResponse?.profileObj; //undefined
  //   const token = credentialResponse?.tokenId; 
  //   console.log(token)
  //   try {
  //     dispatch({type : 'AUTH' , data : {result , token} });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const googleFailure = (error) => {
  //   console.log(error)
  //  console.log('Google sign in was unsuccesfull.') 
  // }

  return (
    <Container component = 'main' maxWidth = 'xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className= {classes.avatar} >
         
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
          <Grid container spacing = {2}>
            {
              isSignUp && (
                <>
                <Input name = 'firstname' label = 'First Name' handleChange = {handleChange} autoFocus half />
                <Input name = 'lastname' label = 'Last Name' handleChange = {handleChange} half/>
                </>
              )
            }
            <Input name = 'email' label = 'Email' handleChange={handleChange} type = 'email' /> 
            <Input name = 'password' label = 'Password' handleChange={handleChange} type = {showPassword ? 'text' :'password' } handleShowPassword={handleShowPassword}/> 
            {isSignUp && <Input name= 'confirmPassword' label ='Repeat Password' handleChange={handleChange} type = 'password' />}
            </Grid>
            <Button type = 'submit' fullWidth variant='contained' color = 'primary' className={classes.submit} >{isSignUp ? 'Sign Up' : 'Sign in'}</Button>
            {/* <GoogleLogin  render={(renderProps) =>(
              <Button 
              className={classes.googleButton} 
              color='primary' 
              fullWidth 
              onClick={renderProps.onClick} 
              disabled = {renderProps.disabled} 
              variant='contained'>Google Login</Button>
            )} 
              onSuccess={googleSuccess}
              onError={googleFailure}
              cookiePolicy="single_host_origin"
              
            /> */}
            <Grid container justify = 'flex-end'>
              <Grid item>
                <Button onClick={switchMode}>{isSignUp ? 'Already have Account ?' : "Don't have an account ?"}</Button>
              </Grid>

            </Grid>
          
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

 