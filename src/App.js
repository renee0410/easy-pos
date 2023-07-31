import './style/all.scss';
import { Routes, Route } from 'react-router-dom';
// pages
import { Login } from './pages/Login';
import { Layout } from './pages/Layout';
import { MenuPage } from './pages/MenuPage';
import { OrderListPage } from './pages/OrderListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='' element={<Layout></Layout>}>
          <Route path='/home' element={<MenuPage></MenuPage>}></Route>
          <Route path='orderList' element={<OrderListPage></OrderListPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
