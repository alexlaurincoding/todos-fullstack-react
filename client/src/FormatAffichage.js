import React ,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Form from "react-bootstrap/Form";

const FormatAffichage = ({afficher, setCategorie}) =>{


    const GreenRadio = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);


    const [selectedValue, setSelectedValue] = React.useState('Travail');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setCategorie(event.target.value);
        afficher(event.target.value);
    };


    return (

        <div style={{marginTop: 20}}>
            <p>Les todo complétés sont:</p>
            <Radio
                checked={selectedValue === 'aucun'}
                onChange={handleChange}
                value="aucun"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'aucun' }}
            />cacher
            <Radio
                checked={selectedValue === 'tous'}
                onChange={handleChange}
                value="tous"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'tous' }}
            />afficher
            <Radio
                checked={selectedValue === 'Travail'}
                onChange={handleChange}
                value="Travail"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Travail' }}
            />à la fin de la liste

        </div>


    );
}

export default FormatAffichage;