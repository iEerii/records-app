import { Link } from "react-router";
import {MainWrap, Title, LoginForm as SignUpForm, LabelWrapper, InputWrapper, Input, Button, LinkWrapper} from '../elements/FormElements'
import styled from "styled-components";

const SignUp = () => {
    return (
        <MainWrap>
            <SignUpTitle>SingUp</SignUpTitle>
            <Line>Please fill in this form to create an account.</Line>
            
            <SignUpForm>
                <SignUpInput>
                    <label htmlFor="email"></label>
                    <Input type="text" placeholder="Enter Email" name="email" />

                    <label htmlFor="password"></label>
                    <Input type="password" placeholder="Enter Password" name="password" />

                    <label htmlFor="psw-repeat"></label>
                    <Input type="password" placeholder="Repeat Password" name="psw-repeat" />
                </SignUpInput>

                <LabelWrapper htmlFor="remember" className="label-container">
                    <input type="checkbox" name="remember" id="remember" /> Remember Me
                    <span className="checkmark"></span>
                </LabelWrapper>

                <SignUpLinks>
                    <Link type="button" to='/login'>Cancel & Back</Link>
                    <Button type="submit">Sign Up</Button>
                </SignUpLinks>
            </SignUpForm>
        </MainWrap>
    );
}

const Line = styled.p`
    color: #4b4b4b;
    font-size: 1.5rem;
`

const SignUpInput = styled(InputWrapper)`
    gap: 1rem;
`
const SignUpTitle = styled(Title)`
    margin: 6rem 0 2rem;
`

const SignUpLinks = styled(LinkWrapper)`
    gap: 16rem;
`
export default SignUp;