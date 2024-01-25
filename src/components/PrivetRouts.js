import react from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const PrivetRouts = () => {
   const auth = localStorage.getItem("users");
   return auth ?<Outlet />: <Navigate to ="/SignUp" />
}

export default PrivetRouts;