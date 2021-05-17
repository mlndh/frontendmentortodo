import React, { useState } from "react";
import styled from "styled-components";

const StyledTxtField = styled.div`
input {
  border-radius: 0.2rem;
  background-color: transparent;
  border: transparent;
  padding: 0.6rem;
  width: 45vw;
}
input[type="text"], textarea, select { 
    outline: none;
}`;

function Input(props) {
    const [name, setName] = useState(""); // State for new todos/input

    function handleChange(e) { // Send the text input to state 
      setName(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.addTask(name, Date.now());
      setName("");
    }
    return (
        <React.Fragment>
        <StyledTxtField>
        <form onSubmit={handleSubmit}>
            <input
            className="text-field"
            type="text" 
            placeholder="Start typing..." 
            name="text"
            value={name}
            onChange={handleChange} 
            autoComplete="off"
            />
            </form>
            </StyledTxtField>
        </React.Fragment>
    );
  }
  
  export default Input;
  