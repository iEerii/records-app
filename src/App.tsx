import { Routes, Route } from 'react-router';
import styled from 'styled-components';
import LoginWarp from './components/LoginWrap';
import SignUp from './components/SignUp';
import './App.css'

function App() {

  return (
		<Main>
			<Routes>
					<Route path="/login" element={ <LoginWarp /> }></Route>
					<Route path="/signup" element={ <SignUp /> }></Route>
					{/* <Route path="*" element={ <App/> }/> */}
			</Routes>
		</Main>
	)
}

const Main = styled.main`
    align-items: center;
    background-color: #102c97;
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export default App
