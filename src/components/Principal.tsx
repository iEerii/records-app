import LoginWrap from './LoginWrap';
import styled from 'styled-components'

const Principal = () => {
    return (
        <Main>
            <LoginWrap />
        </Main>
    );
}

const Main = styled.main`
    align-items: center;
    background-color: #102c97;
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export default Principal;
