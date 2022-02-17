import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import { BodyWrapper } from './components/styles/BodyWrapper.styles';
import GlobalStyle from './components/styles/Global.styles';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
    <>
      <GlobalStyle />
      <BodyWrapper>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </BodyWrapper>
    </>
  );
}

export default App;
