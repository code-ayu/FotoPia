import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Forms"
import {Container , AppBar , /*Typography*/  Grow , Grid } from '@mui/material'
import useStyles from './styles'
import { useDispatch } from "react-redux"
import { useState , useEffect } from "react"
import {getPosts} from './actions/posts'
import fotopia from './images/Fotopia-logo-.webp'


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId , setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  } , [currentId , dispatch])

 

  return (
      <Container maxWidth ='lg'>
        <AppBar className = {classes.appBar} position='static' color='inherit'>
          {/* <Typography className= {classes.heading} variant='h2' align='center'>FotoPia</Typography> */}
          <img className= {classes.image} src = {fotopia}  alt='FotoPia img' height= "60"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid className = {classes.mainContainer} container  justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs = {12} sm = {7}>
                <Posts  setCurrentId = { setCurrentId} />
              </Grid>
              <Grid item xs = {12} sm = {4}>
                <Form currentId = {currentId} setCurrentId = { setCurrentId} />
              </Grid>
            </Grid>
          </Container> 
        </Grow>
      </Container>
   
  )
}

export default App;
