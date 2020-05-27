import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const FaitRetirer = ({afficher, todos}) => {

    const retirer = async(event) => {
        event.preventDefault();
        const link = "http://localhost:9000/api/todos/" + event.target.id;
        const res = await axios.delete(link);
        afficher();
        event.preventDefault();
    }

    const fait = async(event) => {
        event.preventDefault();
        const todoJSON = {"statut": "fini"};
        const res = await axios.patch("http://localhost:9000/api/todos/" + event.target.id, todoJSON);
        console.log();
        console.log(res.data);
        afficher();
    }
return(
    <ListGroup style={{color: "black"}}>
        {todos.map(todo => <ListGroup.Item style={todo.statut == "fini" ? { textDecoration:"line-through", backgroundColor:"grey"} : null}>{todo.titre}
            <Button style={ todo.statut == "fini" ? {display: "none"} : {marginLeft: 20}} id = {todo._id} variant="success" type= "submit" onClick={fait} className="mt-3 mb-3">&#10003;</Button>
            <Button style={{marginLeft: 20, paddingLeft: 13, paddingRight: 13, fontStyle:"italic" }} id = {todo._id} variant="danger" type= "submit" onClick={retirer} className="mt-3 mb-3">
                X</Button>
        </ListGroup.Item>)}
    </ListGroup>
)
}
export default FaitRetirer;