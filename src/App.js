import './App.css';
import PgCertificate from './components/pages/PgCertificate';
import PgHome from './components/pages/PgHome';
import { createHashRouter, RouterProvider } from 'react-router-dom';
const router = createHashRouter([
  { path: '/', element: <PgHome /> },
  { path: '/search/:id', element: <PgCertificate /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
