import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
    const [todos, setTodos] = useState([]);
    const [titreAjout, setTitreAjout] = useState("");
    const [categorieAjout, setCategorieAjout] = useState("");

    const afficherTout = async() => {
        const res = await axios.get('http://localhost:9000/api/todos');
        setTodos(res.data);
        console.log(res.data);
    }

    const ajouter = async(event) => {
        event.preventDefault();
        const todoJSON = {"titre": titreAjout, "categorie": categorieAjout};

        const res = await axios.post("http://localhost:9000/api/todos", todoJSON);
        console.log();
        console.log(res.data);
        afficherTout();
    }

    const modifierTitre = (event) => setTitreAjout(event.target.value);
    const modifierCategorie = (event) => setCategorieAjout(event.target.value);
    const vider = (event) => event.target.value = "";
    const retirer = async(event) => {
        event.preventDefault();
        const link = "http://localhost:9000/api/todos/" + event.target.id;
        const res = await axios.delete(link);
        afficherTout();
    }
    const fait = (event) => {
        //candidats[event.target.id].vote++;
        event.preventDefault();
    }

    return (
        <>
        <div className="App">
            <header className="App-header">

                <Form>
                    <Form.Group controlId="ajouterTodo.Titre">
                        <Form.Control type="text" placeholder="Titre" onChange={modifierTitre} onFocus={vider}/>
                    </Form.Group>
                        <Form.Control as="select" onChange={modifierCategorie}>
                            <option value="aucune">--Catégorie--</option>
                            <option value="maison">Maison</option>
                            <option value="travail">Travail</option>
                            <option value="loisir">Loisir</option>
                            <option value="autre">Autre</option>
                        </Form.Control>
                    <Button style={{marginTop: 5}} variant="success" type="submit" onClick={ajouter}>
                        Ajouter
                    </Button>
                </Form>
                <Button style={{marginTop: 50}} onClick={afficherTout}>Afficher mes Todos</Button>

                <ListGroup style={{color: "black"}}>
                    {todos.map(todo => <ListGroup.Item>{todo.titre}
                    <Button style={{marginLeft: 20}} id = {todo._id} variant="primary" type= "submit" onClick={fait} className="mt-3 mb-3">
                            Fait</Button>
                    <Button style={{marginLeft: 20}} id = {todo._id} variant="danger" type= "submit" onClick={retirer} className="mt-3 mb-3">
                        Retirer</Button>
                    </ListGroup.Item>)}
                </ListGroup>
            </header>
        </div>
        </>
    );

}

export default App;
