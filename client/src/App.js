import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [data, setData] = useState();

    const handleClick = async() => {
        const res = await axios.get('http://localhost:9000/users');
        setData(res.data);
        console.log("allo" + res.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save crissss to reload.
                </p>
                <button onClick={handleClick}>load Data</button>
                <p>{data}</p>
            </header>
        </div>
    );
}

export default App;
