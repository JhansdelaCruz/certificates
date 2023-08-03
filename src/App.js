import { Routes, Route } from 'react-router-dom';
import './App.css';
import PgCertificate from './components/pages/PgCertificate';
import PgHome from './components/pages/PgHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PgHome />}></Route>
        <Route path="/search/:searchTerm" element={<PgCertificate />}></Route>
      </Routes>
    </>
  );
}

export default App;
