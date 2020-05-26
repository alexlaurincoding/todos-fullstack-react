import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const CategorieAffichage = ({afficher}) =>{

    const [categorie, setCategorie] = useState("");

    <Form>
        <Form.Control as="select" onChange={modifierCategorie}>
            <option value="aucune">--Catégorie--</option>
            <option value="maison">Maison</option>
            <option value="travail">Travail</option>
            <option value="loisir">Loisir</option>
            <option value="autre">Autre</option>
        </Form.Control>
        <Button style={{marginTop: 5}} variant="success" type="submit" onClick={afficher}>
            Afficher
        </Button>
    </Form>
}

export default CategorieAffichage;


