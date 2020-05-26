import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import AjouterTodo from "./AjouterTodo";
import FaitRetirer from "./FaitRetirer";
function App() {
    const [todos, setTodos] = useState([]);


    const afficherTout = async() => {
        const res = await axios.get('http://localhost:9000/api/todos');
        setTodos(res.data);
        console.log(res.data);
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <AjouterTodo afficherTout={afficherTout} />
                <Button style={{marginTop: 50}} onClick={afficherTout}>Afficher mes Todos</Button>
                <FaitRetirer afficherTout={afficherTout} todos={todos}/>
            </header>
        </div>
        </>
    );

}

export default App;
