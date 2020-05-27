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

    const afficher = async(categ=categorie) => {
        let url;
        if (categ == categorie){
            if (categorie == "aucun"){
                setTodos([]);
            }
            else{
                url = categorie == "tous"  ? 'http://localhost:9000/api/todos' : categorie == "aucun" ? null : `http://localhost:9000/api/todos/categorie/${categorie}`;
                const res = await axios.get(url);
                setTodos(res.data);
            }
        }
        else{
            if (categ == "aucun"){
                setTodos([]);
            }
            else{
                url = categ == "tous"  ? 'http://localhost:9000/api/todos' : categ == "aucun" ? null :  `http://localhost:9000/api/todos/categorie/${categ}`;
                const res = await axios.get(url);
                setTodos(res.data);
            }

        }

    }
    

    let i = todos.length;
    while(i--){
        if (todos[i].statut === "fini"){
            todos.splice(i, 1);
        }
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
