import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const AjouterTodo = ({afficher}) =>{

    const [titreAjout, setTitreAjout] = useState("");
    const [categorieAjout, setCategorieAjout] = useState("");
    const modifierTitre = (event) => setTitreAjout(event.target.value);
    const modifierCategorie = (event) => setCategorieAjout(event.target.value);
    const vider = (event) => event.target.value = "";

    const ajouter = async(event) => {
        event.preventDefault();
        const todoJSON = {"titre": titreAjout, "categorie": categorieAjout};

        const res = await axios.post("http://localhost:9000/api/todos", todoJSON);
        console.log();
        console.log(res.data);
        afficher();
    }

return(
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
)}

export default AjouterTodo;