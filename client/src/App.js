import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function App() {
    const [data, setData] = useState([]);

    const handleClick = async() => {
        const res = await axios.get('http://localhost:9000/api/todos');
        setData(res.data);
        console.log(res.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={handleClick}>Afficher les choses a faires</Button>
                <div>
                    {data.map(todo => <p>{todo.titre}{"    "}<Button>Delete</Button></p>)}
                </div>
            </header>
        </div>
    );
}

export default App;
