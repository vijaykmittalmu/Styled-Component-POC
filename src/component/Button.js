import styled from "styled-components";
import { setBorder } from "../utils/common";

export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  text-decoration: none;
  min-width: 130px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const BlockButton = styled(Button)`
  width: 100%;
  padding: 10px 0;
  color: ${(props) => (props.color ? props.color : "#000")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ccc")};
  border: ${(props) =>
    setBorder({ width: 1, style: "solid", color: props.bgColor })};
`;

export const GoogleButton = styled(Button)`
  border: ${setBorder({ width: 2, style: "solid", color: "#eb493b" })};
  color: #eb493b;
  background-color: #fff;
  width: 200px;
  padding: 10px 0;
  &:hover {
    background-color: #eb493b;
    color: #fff;
  }
`;

export const FacebookButton = styled(GoogleButton)`
  color: #486cb4;
  border: ${setBorder({ width: 2, style: "solid", color: "#486CB4" })};
  &:hover {
    background-color: #486cb4;
    color: #fff;
  }
`;
