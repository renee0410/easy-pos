import './style/all.scss';
import { Routes, Route } from 'react-router-dom';
// pages
import { Login } from './pages/Login';
import { Layout } from './pages/Layout';
import { MenuPage } from './pages/MenuPage';
import { Dashboard } from './pages/Dashboard';
import { OrderListPage } from './pages/OrderListPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='' element={<Layout></Layout>}>
          <Route path='/' element={<MenuPage></MenuPage>}></Route>
          <Route path='orderList' element={<OrderListPage></OrderListPage>}></Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
