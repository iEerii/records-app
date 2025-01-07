import Form from "./Form";
import styled from "styled-components";

const LoginWrap = () => {
    return (
        <Login>
            <Title>Login</Title>
            <Form />
        </Login>
    );
}

const Login = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40rem;
`

const Title = styled.h1`
    color: #4b4b4b;
    font-size: 4rem;
    margin: 6rem 0 5rem;        
`
export default LoginWrap;