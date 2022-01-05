import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actionCreator'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { delTodo } from '../../actions/actionCreator'
import { updTodo } from '../../actions/actionCreator';
import Todos from '../TodoList/Presentation'
function Presentation({ localStorage, _delTodo, _addTodo, _updTodo }) {
    const [input, setInput] = useState('')
    const [edit, setEdit] = useState(false)
    const [update, setUpdate] = useState('')
    const data = localStorage.data;
    return (
        <div>
            <Paper variant="outlined" sx={{maxWidth:600,margin:'auto',width:'100%',marginTop:10}} >
            <form onSubmit={(e) => {
                e.preventDefault();
                _addTodo(input);
                setInput('');
            }}>
                <TextField id="standard-basic" label="Add Todo" variant="standard" sx={{ width: '100%', maxWidth: '300px', margin: '40px', }} value={input} onChange={(e) => setInput(e.target.value)} required/>
                <Button type="submit" variant="contained" sx={{ marginTop: '40px' }}>Add Todo</Button>
            </form>
            {data.map(data => (<Todos value={data.todo} id={data.id} />))}
            </Paper>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
