import React from "react";

const Interface = ({ value, setValue, handleDefinition, handleSynonym }) => {
    return (
        <div>
            <h4>Writing Helper</h4>
            <h4>Enter Word:</h4>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <div id='button-bar'>
                <button onClick={handleDefinition}>Definition</button>
                <button onClick={handleSynonym}>Synonyms</button>
            </div>
        </div>
    )
}

export default Interface;