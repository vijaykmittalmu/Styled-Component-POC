import styled from "styled-components";

export const BoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const setBorder = ({ width, style, color }) => {
  return `${width}px ${style} ${color}`;
};
