import "./App.css";

function App() {



  return (
    <div>
      <h2>Writing Helper</h2>
      <p>Enter Word:</p>
      <input type="text" />
      <div id="buttons-bar">Select Action: <br></br>
        <button>Definition</button>
        <button>Synonyms</button>
        <div id='output-div'></div>
      </div>
    </div>
  );
}

export default App;
