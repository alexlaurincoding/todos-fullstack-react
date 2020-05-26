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
    const [affichage, setAffichage] = useState("");
    const [todos, setTodos] = useState([]);


    const afficherTout = async() => {
        const res = await axios.get('http://localhost:9000/api/todos');
        setTodos(res.data);
        console.log(res.data);
    }

<<<<<<< HEAD
    const debuter = (event) => {
        if (affichage == ""){
            setAffichage("tout");
            afficherTout();
        }
    }

    const Debuter = () => {
        return (
        <Button variant="warning" type="submit" onClick={debuter}>
            Afficher mes Todos
        </Button>

        )
    }
    const AfficherTodos = ({categorie}) => {
        return (
        <ListGroup style={{color: "black"}}>
            {todos.map(todo => <ListGroup.Item style={todo.statut == "fini" ? { textDecoration:"line-through", backgroundColor:"grey"} : null}>{todo.titre}
                <Button style={ todo.statut == "fini" ? {display: "none"} : {marginLeft: 20}} id = {todo._id} variant="success" type= "submit" onClick={fait} className="mt-3 mb-3">&#10003;</Button>
                <Button style={{marginLeft: 20, paddingLeft: 13, paddingRight: 13, fontStyle:"italic" }} id = {todo._id} variant="danger" type= "submit" onClick={retirer} className="mt-3 mb-3">
                    X</Button>
            </ListGroup.Item>)}
        </ListGroup>
        )
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

    const fait = async(event) => {
        event.preventDefault();
        const todoJSON = {"statut": "fini"};
        alert(todoJSON.statut);
        const res = await axios.patch("http://localhost:9000/api/todos/" + event.target.id, todoJSON);
        console.log();
        console.log(res.data);
        afficherTout();
    }

=======
>>>>>>> bc52ec2fe473ba95acc372ca770bc0732e41281f
    return (
        <>
        <div className="App">
            <header className="App-header">
<<<<<<< HEAD

                {affichage == "" ?
                    <Debuter/>
                    :
                    null
                }
                {affichage != "" ?
                    <>
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

                    <AfficherTodos categorie={affichage} />
                    </>
                    :
                    null
                }

=======
                <AjouterTodo afficherTout={afficherTout} />
                <Button style={{marginTop: 50}} onClick={afficherTout}>Afficher mes Todos</Button>
                <FaitRetirer afficherTout={afficherTout} todos={todos}/>
>>>>>>> bc52ec2fe473ba95acc372ca770bc0732e41281f
            </header>
        </div>
        </>
    );

}

export default App;
