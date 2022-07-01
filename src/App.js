import ContactsForm from './components/ContactsForm/ContactsForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '@mui/material/Container';
import { theme } from './App.styled';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="m">
        <Suspense fallback={<div>Loading...</div>}>
          {!isFetchingCurrentUser && (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route
                  path="login"
                  element={
                    <PublicRoute navigateTo="/contacts" restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="register"
                  element={
                    <PublicRoute navigateTo="/" restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute navigateTo="/login">
                      <ContactsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/contacts/create"
                  element={
                    <PrivateRoute navigateTo="/login">
                      <ContactsForm />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
          {/* <Toaster /> */}
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};
