import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/B4pNDjR/jeff-matz-high-on-fire.png?auto=compress&cs=tinysrgb&dpr=2&h=400&w=700")
    
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching, error}  = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventdefault()
    login(dispatch,{username, password});
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange ={(e) => setUsername(e.target.value)}/>
          <Input placeholder="password" onChange ={(e) => setPassword(e.target.value)} />
          <Button onClick = {handleClick} disabled ={isFetching}>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
