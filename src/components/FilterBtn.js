import styled from "styled-components";

const StyledFilterBtn = styled.button`
background-color: transparent;
border: none;
padding: 0;
`;
function FilterBtn(props) {
    return (
      <StyledFilterBtn
          type="button"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >
          <span>{props.name}</span>
      </StyledFilterBtn>
      );
    }
  export default FilterBtn;