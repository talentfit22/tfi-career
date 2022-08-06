import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SuperAdminRegister from './pages/SuperAdminRegister';
import SuperAdminLogin from './pages/SuperAdminLogin';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import AddParticipant from './pages/AddParticipant';

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{isAuth ? <Outlet /> : <Navigate to='/login/admin-tfi' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard/admin-tfi' />}</>
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddParticipant/>}/>
        
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard/admin-tfi' element={<SuperAdminDashboard />} />
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path='/register/admin-tfi' element={<SuperAdminRegister />} />
          <Route path='/login/admin-tfi' element={<SuperAdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
