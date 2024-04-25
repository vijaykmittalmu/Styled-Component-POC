import styled from "styled-components";
import { colors } from "../utils/colors";

export const Title = styled.h2`
  color: red;
  margin: 0;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  color: ${colors.gray};
  letter-spacing: 1px;
  font-weight: 500;
  a {
    color: ${colors.primary};
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #000;
`;

export const Typography = styled.p`
  text-align: ${(props) => (props.align ? props.align : "center")};
`;
