import { Link } from "react-router";
import {LoginForm, InputWrapper, DivRelative, Input, LabelWrapper,Button,LinkWrapper} from '../elements/FormElements';
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
                <p>Not a member? <Link to='/signup'>Sign up now</Link></p>
            </LinkWrapper>
        </LoginForm>
    );
}

export default Form;