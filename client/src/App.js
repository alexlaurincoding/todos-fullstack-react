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


    const afficherTout = async(categorie) => {
        if (categorie == "tous") {
            const res = await axios.get('http://localhost:9000/api/todos');
            setTodos(res.data);
            //console.log(res.data);
        }
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <AjouterTodo afficher={() => afficherTout("tous")} />
                <Button style={{marginTop: 50}} onClick={() => afficherTout("tous")}>Afficher mes Todos</Button>
                <FaitRetirer afficher={() => afficherTout("tous")} todos={todos}/>
            </header>
        </div>
        </>
    );

}

export default App;
