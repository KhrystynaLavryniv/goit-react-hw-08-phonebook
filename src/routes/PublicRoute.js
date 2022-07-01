import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  navigateTo,
  restricted = false,
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}
