import React from "react";
import styled from "styled-components";
import "./Button.css";

const Button = styled.button`
  background-color: ${(props) => props.bg || "rgb(133, 133, 253)"};
  color: ${(props) => props.color || "aliceblue"};
  padding: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: blueviolet;
  }
`;

// const Button = ({ displayName, onClick, bg, color }) => {
//   return (
//     <button
//       className="button_button"
//       onClick={onClick}
//       style={{ backgroundColor: bg, color: color }}
//     >
//       {displayName}
//     </button>
//   );
// };

export default Button;
