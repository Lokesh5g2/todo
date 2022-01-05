import  {React,useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { delTodo } from '../../actions/actionCreator'
import { updTodo } from '../../actions/actionCreator';
import { addTodo } from '../../actions/actionCreator'
import {connect} from 'react-redux'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import {Button} from '@mui/material';
 function Presentation({value,localStorage, _delTodo, _addTodo, _updTodo,id}) {
     const [edit,setEdit] = useState(false);
     const [input,setInput] = useState(value)
  return (

    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', marginLeft:'40px'}} key={value.id}>
      
        <ListItem
          key={value.id}
          disableGutters
          secondaryAction={
            <IconButton>
            </IconButton>
          }
        >
            <Card sx={{display:'flex',flexDirection:'row',maxWidth:360,width:'100%',padding:2}} key={id}>
                {edit?<form onSubmit={(e)=>{e.preventDefault();_updTodo(id,input);setEdit(false)}}>
                    <TextField id="standard-basic" label="Update Todo" variant="standard" value={input} onChange={(e) => setInput(e.target.value)}/>
                <Button type ='submit' type="contained">Save</Button>
                    </form>
                :
                <ListItemText primary={` ${value}`} key={id}/>}
          
          <ModeEditOutlineOutlinedIcon onClick={()=>{
              setEdit(true);
              setInput(value)
        }}/>
          <DeleteOutlineIcon onClick={() => _delTodo(value)}/>
            </Card>
        </ListItem>
    </List>
  );
}
const mapStateToProps = (state) =>
({
    localStorage: state
})
const mapDispatchToProps = {
    _addTodo: addTodo,
    _delTodo: delTodo,
    _updTodo: updTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Presentation)