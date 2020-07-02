import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from "./logo.svg";
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    return (

    <header className="App-header">

      <div id = "top">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Counter App</h1>
      <br></br>
      </div>
    
        <div>
            <div className="displayedNumber">{count}</div>
            <button type="button" class="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Add to Count</button>
        </div>
          <br></br>
    </header>
    );

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;