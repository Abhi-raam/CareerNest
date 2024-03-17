import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Replace this with your actual logic to check for the user token
  // const userToken: boolean = false;
  const location = useLocation();
  const {authUser} = useAuth()


  // Define paths that should be allowed without authentication
  const allowedPaths = ['/signup'];

//   if (!userToken && !allowedPaths.includes(location.pathname)) {
  if (!authUser && !allowedPaths.includes(location.pathname)) {
    // Redirect to login if not authenticated and not on an allowed path
    return <Navigate to='/login' />;
  } else {
    // Allow access to children if authenticated or on an allowed path
    return children
  }
};

export default ProtectedRoute;
