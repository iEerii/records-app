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

            <LabelWrapper htmlFor="remember" className="label-container">
                <input id="remember" type="checkbox"/>
                <span className="checkmark"></span>
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
    cursor: pointer;
    display: block;
    font-size: 1.2rem;
    margin: 1rem 1rem 2.5rem;
    position: relative;
    user-select: none;
    &:hover {

    }

    &input[type='checkbox'] {
        //Hide the browser's default checkbox
        cursor: pointer;
        height: 0;
        opacity: 0;
        position: absolute;
        width: 0;
    }

    // Create a custom checkbox
    & .checkmark {
        background-color: #eeeeee;
        position: absolute;
        top: -.2rem;
        left: -.5rem;
        height: 2rem;
        width: 2rem;
    }
    
    &.label-container:hover input ~ .checkmark{
        background-color: #cccccc;
    }

    &.label-container input:checked ~ .checkmark {
        background-color: #f7c25e;
    }

    & .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    &.label-container input:checked ~ .checkmark:after {
        display: block;
    }

    &.label-container .checkmark:after {
        left: .8rem;
        top: .4rem;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
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