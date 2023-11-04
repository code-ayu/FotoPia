import {Avatar ,  Paper , Grid , Typography , Container, Button} from '@mui/material'
import useStyles from './styles';
import Input from './Input';
import { useState } from 'react';


function Auth() {
  const classes= useStyles();
  const [isSignUp , setIsSignUp] = useState(false);
  const [showPassword , setShowPassword] = useState(false)

  const handleShowPassword = () =>{
    setShowPassword((prevShowPassword) => !prevShowPassword )
  }
  const handleSubmit = () => {

  }

  const handleChange = () => {

  } 

  const switchMode = () => {
    setIsSignUp((isSignUp) => !isSignUp)
    handleShowPassword(false)
  }

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
            
            <Grid container justify = 'flex-end'>
              <Grid itme>
                <Button onClick={switchMode}>{isSignUp ? 'Already have Account ?' : "Don't have an account ?"}</Button>
              </Grid>

            </Grid>
          
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

 