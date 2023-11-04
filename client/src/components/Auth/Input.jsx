
import {  Grid ,  TextField , InputAdornment, IconButton } from '@mui/material'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// eslint-disable-next-line react/prop-types
function Input({name, handleChange , label , autoFocus , type , handleShowPassword , half}) {
  return (
    <Grid item xs ={12} sm = {half ? 6 :12}>
        <TextField name = {name} 
        onchange = {handleChange} 
        variant = 'outlined' 
        required
        fullWidth
        label = {label}
        autoFocus = {autoFocus}
        type = {type} 
           InputProps= {name ==='password' &&{
            endAdornment :( 
                <InputAdornment position = 'end'>
                    <IconButton 
                    onClick={handleShowPassword}>
                        {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                </InputAdornment>
            )
        }} ></TextField>


    </Grid>
  )
}

export default Input
