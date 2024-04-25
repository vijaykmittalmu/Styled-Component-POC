import styled from "styled-components";
import Login from "./auth/Login";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
`;

function App() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

export default App;
