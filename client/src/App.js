import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import AjouterTodo from "./AjouterTodo";
import FaitRetirer from "./FaitRetirer";
import CategorieAffichage from "./CategorieAffichage";
function App() {

    const [todos, setTodos] = useState([]);
    const [categorie, setCategorie] = useState("tous");

    const afficher = async() => {
        const url = categorie == "tous"  ? 'http://localhost:9000/api/todos' : `http://localhost:9000/api/todos/categorie/${categorie}`;
        const res = await axios.get(url);
        setTodos(res.data);
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <AjouterTodo afficher={afficher} />
                <CategorieAffichage afficher={afficher} setCategorie={setCategorie}/>
                <FaitRetirer afficher={afficher} todos={todos}/>
            </header>
        </div>
        </>
    );

}

export default App;
