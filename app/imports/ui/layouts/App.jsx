import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import HistoryPage from '../pages/HistoryPage';
import ReturnPage from '../pages/ReturnPage';
import OrderPage from '../pages/OrderPage';
import SearchPage from '../pages/SearchPage';
import ResultPage from '../pages/ResultPage';
import ConfirmationPage from '../pages/ConfirmationPage';

/* Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/result/:OrderId" element={<ResultPage />} />
        <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
        <Route path="/search" element={<AdminRoute><SearchPage /></AdminRoute>} />
        <Route path="/return/:OrderId" element={<AdminRoute><ReturnPage /></AdminRoute>} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

const AdminRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return isLogged && isAdmin ? children : <Navigate to="/" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

AdminRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminRoute.defaultProps = {
  children: <Landing />,
};
export default App;
