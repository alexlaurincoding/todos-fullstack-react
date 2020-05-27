import React ,{useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const CategorieAffichage = ({afficher, setCategorie}) =>{

    const modifierCategorie = (event) => {
        setCategorie(event.target.value);
    }

    const appelerAffichage = (event) => {
        setCategorie(event.target.value);
        afficher(event.target.value);
    }

    return(

        <Form style={{marginTop: 100}}>
            Affichage:
            <Form.Control as="select" onChange={appelerAffichage}>
                <option value="aucun">Aucun</option>
                <option value="tous">Tous</option>
                <option value="maison">Maison</option>
                <option value="travail">Travail</option>
                <option value="loisir">Loisir</option>
                <option value="autre">Autre</option>
            </Form.Control>
        </Form>
    )
}

export default CategorieAffichage;


