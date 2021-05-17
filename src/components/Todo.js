import cross from "../images/cross.svg"
import check from "../images/icon-check.svg"
import styled from "styled-components";

const StyledTodo = styled.div`
border-bottom: solid grey 1px;
display: flex;
span {
  position: absolute;
  left: 40%;
}
  li {
    list-style: none;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;

  }
`;
const Input = styled.input`
    padding: 0.5rem;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
    border: solid grey 1px;
    &:checked {
    background: url(${check});
    ${'' /* background: linear-gradient(#e66465, #9198e5); */}
    background-repeat: no-repeat;
    background-size: 100%;  
    }
`;
const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  img {
  width: 0.7rem;
  position: absolute;
  right: 1rem;
}
`;
export default function Todo(props) {
    return (
      <StyledTodo> 
      <li>
          <Input type="checkbox" onChange={() => props.taskComplete(props.id)} />
            <span>{props.name}</span>
          <StyledBtn onClick={() => props.deleteTask(props.id, props.name)}>
          <img src={cross} alt="delete button" />
          </StyledBtn>
      </li>
      </StyledTodo>
    );
  }