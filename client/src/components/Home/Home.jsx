import useStyles from './styles'
import { useDispatch } from "react-redux"
import { useState , useEffect } from "react"
import {getPosts} from '../../actions/posts'
import Posts from "../../components/Posts/Posts"
import Form from "../../components/Form/Forms"
import {Container , Grow , Grid } from '@mui/material'

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId , setCurrentId] = useState(null);
    useEffect(() => {
      dispatch(getPosts());
    } , [currentId , dispatch])
  
   
  return (
    <div>
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
    </div>
  )
}

export default Home;
