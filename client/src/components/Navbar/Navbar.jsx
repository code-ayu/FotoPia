/* eslint-disable no-unused-vars */
import { AppBar,  Toolbar,  Typography , Avatar, Button  } from '@mui/material';
import {Link, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {jwtDecode}  from 'jwt-decode';
import { LOGOUT } from '../../constants/actionTypes';

function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const logout = () => {
      dispatch({ type: LOGOUT });
      setUser(null);
      localStorage.clear();
      navigate('/');
    };

    console.log(user)

    useEffect(() => {
      const token = user?.token ;
      if(token) {
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp *1000 < new Date().getTime()){
          logout();
        }
      }

    }, [location])

  return (
    
    <div>
        <AppBar className = {classes.appBar} position='static' color='inherit'>
          <div className={classes.brandContainer}>
            <Typography component = {Link} to ='/' className = {classes.heading} variant = 'h2' >FOTOPIA</Typography>
          
          <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profille}>
                     <Avatar className={classes.purple} alt = {user.result.name} src = {user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> 
                     <Typography   className={classes.userName} variant='h6'>{user.result.name}</Typography> 
                    <Button className={classes.logout} variant='contained' color = "secondary" onClick={logout}>logout</Button>
                </div>
                ):(
                    <Button component = {Link} to ='/auth'  variant='contained' color = "primary">Sign In</Button>
                )}

          </Toolbar>
          </div>
        </AppBar>
    </div>
  )
}

export default Navbar;
