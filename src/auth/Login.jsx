import styled from "styled-components";
import {
  Title,
  SubTitle,
  Form,
  FormItem,
  FormCheckbox,
  Button,
  BlockButton,
  GoogleButton,
  FacebookButton,
  Typography,
} from "../component";
import { colors } from "../utils/colors";

const LoginWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 30px;
`;

const InlineSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <SubTitle>
        Doesn't have an account yet? &nbsp;
        <a href="/#">Sign up</a>
      </SubTitle>

      <Form>
        <FormItem>
          <label>Email Address</label>
          <input type="text" placeholder="you@example.com" />
        </FormItem>
        <FormItem>
          <label>Password</label>
          <input type="text" placeholder="enter 6 character or more" />
        </FormItem>
        <InlineSection>
          <FormCheckbox>
            <input type="checkbox" value="Remember me" />
            <label>Remember me</label>
          </FormCheckbox>
          <Button as="a" href="/#">
            Forgot Password?
          </Button>
        </InlineSection>
        <BlockButton type="submit" color="#fff" bgColor={colors.primary}>
          login
        </BlockButton>
        <Typography>or Login with</Typography>
        <section
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <GoogleButton>Google</GoogleButton>
          <FacebookButton>Facebook</FacebookButton>
        </section>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
