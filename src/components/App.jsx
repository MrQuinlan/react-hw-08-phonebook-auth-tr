import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import { PublicRoute } from './Routes/PublicRoutes';
import { PrivateRoute } from './Routes/PrivateRoutes';

import { authOperations } from 'redux/Auth';
import { RegisterForm, LogInForm } from './Auth';

import Container from './Container';
import NavBar from './NavBar/Navbar';

import s from './App.module.css';

// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';

const ContactForm = lazy(() =>
    import('./ContactForm' /* webpackChunkName: "ContactForm" */)
);

const Filter = lazy(() => import('./Filter' /* webpackChunkName: "Filter" */));

const ContactList = lazy(() =>
    import('./ContactList' /* webpackChunkName: "ContactList" */)
);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <div>
            <Container>
                <NavBar />

                <h1 className={s.title}>Phonebook</h1>

                <Suspense fallback="Loading">
                    <Routes>
                        <Route
                            path="/register"
                            element={
                                <PublicRoute redirectPath={'/contacts'}>
                                    <RegisterForm />
                                </PublicRoute>
                            }
                        />

                        <Route
                            path="/"
                            element={
                                <PublicRoute redirectPath={'/contacts'}>
                                    <LogInForm />
                                </PublicRoute>
                            }
                        />

                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute redirectPath={'/'}>
                                    <ContactForm />
                                    <Filter />
                                    <ContactList />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Suspense>
            </Container>
        </div>
    );
};

export default App;
