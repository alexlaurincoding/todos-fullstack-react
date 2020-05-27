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

        <div>
            <Radio
                checked={selectedValue === 'aucun'}
                onChange={handleChange}
                value="aucun"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'aucun' }}
            />Aucun
            <Radio
                checked={selectedValue === 'tous'}
                onChange={handleChange}
                value="tous"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'tous' }}
            />Tous
            <GreenRadio
                checked={selectedValue === 'Travail'}
                onChange={handleChange}
                value="Travail"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Travail' }}
            />Travail
            <Radio
                checked={selectedValue === 'Loisir'}
                onChange={handleChange}
                value="Loisir"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Loisir' }}
            />Loisir
            <Radio
                checked={selectedValue === 'Autre'}
                onChange={handleChange}
                value="Autre"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Autre' }}
                size="small"
            />Autre
        </div>


    );
}

export default FormatAffichage;