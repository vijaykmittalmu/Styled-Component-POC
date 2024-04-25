import styled from "styled-components";
import { colors } from "../utils/colors";

export const Form = styled.form`
  width: 100%;
  display: block;
  section {
    width: 100%;
  }
`;

export const FormItem = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  label {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    margin: 10px 0;
  }

  input {
    padding: 10px 7px;
    border: 2px solid #bbb;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    &:focus {
      border: 2px solid ${colors.primary};
    }
  }
`;

export const FormCheckbox = styled.section`
  display: flex;
  input[type="checkbox"] {
    zoom: 1.5;
  }
  label {
    margin-top: 2px;
  }
`;
