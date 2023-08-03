import './App.css';
import PgCertificate from './components/pages/PgCertificate';
import PgHome from './components/pages/PgHome';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ToolBar from './components/Dashboard/ToolBar';
function App() {
  return (
    <HashRouter>
      <ToolBar />
      <Routes>
        <Route path="/" element={<PgHome />} />
        <Route path="/search/:id" element={<PgCertificate />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
