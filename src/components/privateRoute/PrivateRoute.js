import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  
  if (localStorage.getItem('profile')) {
    if (location.pathname === '/login') {
      return <Navigate to='/' />;
    }
    return children;
  }
  
  if (location.pathname === '/login') {
    return children;
  }

  return <Navigate to={{ pathname: "/login", state: { from: location } }} replace/>
}

export default PrivateRoute;