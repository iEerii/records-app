import styled from "styled-components";
import Icon1 from "../assets/user-icon.svg";
import Icon2 from "../assets/lock-icon.svg";

const Form = () => {
    return (
        <LoginForm action="">
            <InputWrapper>
                <DivRelative>
                    <img className="icon-1" src={ Icon1 } alt="user-icon" />
                    <Input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    />
                </DivRelative>
                <DivRelative>
                    <img className="icon-1" src={ Icon2 } alt="lock-icon" />
                    <Input 
                        type="password"
                        name="password"
                        placeholder="Password" 
                    />
                </DivRelative>
            </InputWrapper>
            
            <LabelWrapper htmlFor="remember">
                <input id="remember" type="checkbox"/> 
                Remember me
            </LabelWrapper>
            
            <Button>Log in</Button>
            <LinkWrapper>
                <p>Forget Password?</p>
                <p>Not a member? <span>Sign up now</span></p>
            </LinkWrapper>
        </LoginForm>
    );
}

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
        a, p {
            color: #6c6969;
            font-size: 1.2rem;
            text-align: center;
        }
        
        span {
            color:#0e6197;
            cursor: pointer;
        }
`;

const InputWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
`

const DivRelative = styled.div`
    display: flex;
    position: relative;
        .icon-1 {
            position: absolute;
            width: 2rem;
            top: 50%;
            left: .8rem;
            transform: translateY(-50%);
        }
`

const Input = styled.input`
    border: .1rem none;
    border-radius: 3rem;
    background-color:#ece9e9;
    padding: 1rem 3rem;
    width: 30rem;
`
const LabelWrapper = styled.label`
    color: #6c6969;
    display: flex;
    font-size: 1.2rem;
    gap: 1rem;
    margin: 1rem 1rem 2.5rem;

    input[type='checkbox'] {
        appearance: none;
        width: 1.5rem;
        height: 1.5rem;
        border: .1rem solid #6c6969;
        border-radius: .4rem;
        background-color: white;
        cursor: pointer;
        position: relative;
        
        &:checked {
            background-color: #f7c25e;
            border: .1rem #f7c25e;
        }
        
        &:checked::after {
            content: '✓'; /* Palomita */
            color: #ffffff; /* Color de la palomita */
            font-size: 1rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`

const Button = styled.button`
    border: .1rem none;
    border-radius: 3rem;
    background: linear-gradient(to right, #FCC737, #EB3678);
    color: #ffffff;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: .2rem;
    padding: 1rem;
    text-transform: uppercase;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
`
export default Form;