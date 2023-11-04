import { AppBar,  Toolbar,  Typography , Avatar, Button  } from '@mui/material';
import {Link } from 'react-router-dom';
import useStyles from './styles';

function Navbar() {
    const classes = useStyles();
    const user = null;
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
                    <Button className={classes.logout} variant='contained' color = "secondary" onClick={()=>{}}>logout</Button>
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
