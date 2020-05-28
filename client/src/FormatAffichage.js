import React ,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Form from "react-bootstrap/Form";

const FormatAffichage = ({afficher, affichageCompletes, setAffichageCompletes}) =>{


    const GreenRadio = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);




    const handleChange = (event) => {
        setAffichageCompletes(event.target.value);
        afficher();
    };


    return (

        <div style={{marginTop: 100}}>
            <p>Les todo complétés sont:</p>
            <Radio
                checked={affichageCompletes === 'cacher'}
                onChange={handleChange}
                value="cacher"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'cacher' }}
            />cachés
            <GreenRadio
                checked={affichageCompletes === 'afficher'}
                onChange={handleChange}
                value="afficher"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'afficher' }}
            />affichés
            <Radio
                checked={affichageCompletes === 'fin'}
                onChange={handleChange}
                value="fin"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'fin' }}
            />à la fin de la liste

        </div>


    );
}

export default FormatAffichage;