import { useState , useEffect } from 'react';
import useStyles from './styles'
import FileBase from 'react-file-base64'
import {useDispatch  , useSelector} from 'react-redux';
import { TextField , Button , Typography , Paper  } from '@material-ui/core';
import { createPost , updatePost } from '../../actions/posts';

//Forms 
// eslint-disable-next-line react/prop-types
const Form =({currentId , setCurrentId}) =>{
    const [postData , setPostData] = useState({
         title : '', message : '' , tags : '',selectedFile : ''
    })

    const post = useSelector((state) => (currentId ? state.posts.find((p)=> p._id === currentId) :null))

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() => { 
        if (post) setPostData(post);
    } , [post])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(currentId ){

            dispatch(updatePost(currentId , {...postData ,name : user?.result?.name }))
           
        }
        else{
            dispatch(createPost({...postData , name : user?.result?.name }))
        }
        clear();
        
    };
    if(!user?.result?.name){
        return(
            <Paper className = {classes.paper}>
                <Typography variant = 'h6' align = 'center'>
                    Please Sign In to start Posting your memories and like other&#39;s.
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title : '', message : '' , tags : '',selectedFile : ''})


    }
    return (
        <>
        <Paper className= {classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root} `} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} the World of Memories</Typography>
                {/* <TextField name = "creator" variant='outlined' label = "Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData , creator : e.target.value})}> </TextField> */}
                <TextField name = "title" variant='outlined' label = "Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData , title : e.target.value})}> </TextField>
                <TextField name = "message" variant='outlined' label = "Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData , message : e.target.value})}> </TextField>
                <TextField name = "tags" variant='outlined' label = "Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData , tags : e.target.value.split(',')})}> </TextField>
                <div className={classes.fileInput}>
                    <FileBase
                        type = "file" 
                        multiple = {false}
                        onDone = {({base64}) => setPostData({ ...postData , selectedFile :base64})}
                    />
                </div>
                <Button className= {classes.buttonSubmit} variant='contained' color = "primary" size = 'large' type = 'submit' fullWidth>Submit</Button>
                <Button variant='contained' color = "secondary" size = 'small' onClick={clear} fullWidth>clear</Button>
            </form>
            
        </Paper>
        
        </>
    )
}

export default Form;