import './style/all.scss';
import { Routes, Route } from 'react-router-dom';
// pages
import { Layout } from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout></Layout>}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
