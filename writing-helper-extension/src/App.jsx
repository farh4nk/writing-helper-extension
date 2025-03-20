import { useState } from "react";
import "./App.css";
import Interface from "./Interface";

function App() {

  const [value, setValue] = useState("");
  const [definition, setDefinition] = useState("");
  const [synonyms, setSynonyms] = useState("");

  async function queryApi(action) {

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value.toLowerCase()}/`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (action === "definition") {
        setDefinition(data[0]?.meanings[0]?.definitions[0]?.definition);
      }
      else if (action === "synonym") {
        setSynonyms((data[0]?.meanings[0]?.synonyms).join(", "));
      }
    }
    catch (err) {
      console.log(err.message);
      alert("Word not found");
    }

  }




  return (
    <div>
      <Interface value={value} setValue={setValue}
        handleDefinition={() => queryApi("definition")}
        handleSynonym={() => queryApi("synonym")} />
      <p>Definition: {definition}</p>
      <p>Synonym(s): {synonyms}</p>
    </div>
  );
}

export default App;
